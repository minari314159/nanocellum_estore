
from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Product, Cart, CartItem, Order
from .serializers import ProductSerializer, UserSerializer, CartItemSerializer, OrderSerializer


class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# -------------------------------Product CRUD ----------------------------------#

class ProductsListCreate(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class ProductRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductSerializer
    lookup_field = "pk"

    def get_queryset(self):
        user = self.request.user
        return Product.objects.filter(creator=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(creator=self.request.user)
        else:
            print(serializer.errors)

# -------------------------------CART CRUD ----------------------------------#

# @api_view(['GET'])
# def cart_detail(request, user_id):
#     cart = get_object_or_404(Cart, user_id=user_id)
#     serializer = CartItemSerializer(cart.cartitem_set.all(), many=True)
#     return Response(serializer.data)


# @api_view(['POST'])
# def add_to_cart(request):
#     if request.method == 'POST':
#         product_id = request.data.get('product_id')
#         quantity = request.data.get('quantity')

#         product = get_object_or_404(Product, pk=product_id)
#         cart, created = Cart.objects.get_or_create(user=request.user)
#         cart_item, created = CartItem.objects.get_or_create(
#             cart=cart, product=product)
#         cart_item.quantity += int(quantity)
#         cart_item.save()
#         return Response(status=status.HTTP_201_CREATED)


# @api_view(['POST'])
# def checkout(request):
#     if request.method == 'POST':
#         cart = get_object_or_404(Cart, user=request.user)
#         order = Order.objects.create(
#             user=request.user, total_price=cart.total_price)
#         for cart_item in cart.cartitem_set.all():
#             order.items.add(cart_item)
#         cart.delete()
#         return Response(status=status.HTTP_201_CREATED)
