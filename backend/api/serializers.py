
from decimal import Decimal
from django.db import transaction
from rest_framework import serializers
from .models import Customer,  Product, Review, Order, OrderItem, Cart, CartItem
from .signals import order_created


class ProductSerializer(serializers.ModelSerializer):
    price_with_tax = serializers.SerializerMethodField(
        method_name="calculate_tax")

    def calculate_tax(self, product):
        return product.price * Decimal(1.1)

    class Meta:
        model = Product
        fields = ['id', 'name',
                  'description', 'color', 'price', 'image', 'price_with_tax']


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ['id', 'date', 'reviewer', 'description',
                  'rating']
    # ensures that the product_id is passed to the serializer and therefore the view, don't forget to add the product_id to the context in the view

    def create(self, validated_data):
        product_id = self.context['product_id']
        return Review.objects.create(product_id=product_id, **validated_data)


class CartItemProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'image']


class CartItemSerializer(serializers.ModelSerializer):
    product = CartItemProductSerializer()
    total_price = serializers.SerializerMethodField()

    def get_total_price(self, cart_item: CartItem):
        return cart_item.product.price * cart_item.quantity

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'total_price']

# Add to cart serializer


class AddToCartSerializer(serializers.Serializer):
    product_id = serializers.UUIDField()
    quantity = serializers.IntegerField(min_value=1)

    def validate_product_id(self, value):
        if not Product.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No product with the given ID was found.')
        return value

    def save(self, **kwargs):
        cart_id = self.context['cart_id']
        product_id = self.validated_data['product_id']
        quantity = self.validated_data['quantity']

        if quantity is None:
            raise serializers.ValidationError(
                {"quantity": "This field is required."})
        try:
            # updating an existing cart item
            # self.instance is used to return the created instance and follow the same pattern as the ModelSerializer
            cart_item = CartItem.objects.get(
                cart_id=cart_id, product_id=product_id)
            cart_item.quantity += quantity
            cart_item.save()
            self.instance = cart_item

        except CartItem.DoesNotExist:
            # creating a new cart item
            # self.instance is used to return the created instance and follow the same pattern as the ModelSerializer
            self.instance = CartItem.objects.create(
                cart_id=cart_id, **self.validated_data)

        return self.instance

    class Meta:
        model = CartItem
        fields = ['id', 'product_id', 'quantity']


class UpdateCartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['quantity']


class CartSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    items = CartItemSerializer(many=True, read_only=True)
    total_price = serializers.SerializerMethodField()

    def get_total_price(self, cart):
        return sum([item.quantity * item.product.price for item in cart.items.all()])

    class Meta:
        model = Cart
        fields = ['id', 'items', 'total_price']


class CustomerSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Customer
        fields = ['id', 'user_id', 'birth_date', 'membership']

# Not including order in fields becuase will be used in the OrderSerializer


class OrderItemSerializer(serializers.ModelSerializer):
    product = CartItemProductSerializer

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'price']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'customer', 'items',
                  'payment_status', 'placed_at']


class UpdateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['payment_status']

class CreateOrderSerializer(serializers.Serializer):
    cart_id = serializers.UUIDField()

    # override the save method to create the order and associate it with the customer
    def save(self, **kwargs):
        with transaction.atomic():
            cart_id = self.validated_data['cart_id']

            def validate_cart_id(self, cart_id):
                if not Cart.objects.filter(pk=cart_id).exists():
                    raise serializers.ValidationError(
                        'No cart with the given ID was found.')
                if CartItem.objects.filter(cart_id=cart_id).count() == 0:
                    raise serializers.ValidationError('The cart is empty.')
                return cart_id
            
            # get or create the customer
            customer = Customer.objects.get(
                user_id=self.context['user_id'])
            order = Order.objects.create(customer=customer)

            cart_items = CartItem.objects.select_related(
                'product').filter(cart_id=cart_id)
            # get the cart items and create order items list
            order_items = [
                OrderItem(
                    order=order,
                    product=item.product,
                    price=item.product.price,
                    quantity=item.quantity
                ) for item in cart_items]
            # bulk create the order items
            OrderItem.objects.bulk_create(order_items)

            # delete the cart items
            Cart.objects.filter(pk=cart_id).delete()

            order_created.send_robust(self.__class__, order=order)

            return order
