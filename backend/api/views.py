
from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListCreateAPIView, CreateAPIView
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, DestroyModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.pagination import PageNumberPagination
from .models import OrderItem, Product, Order, Review, Cart, CartItem
from .serializers import ProductSerializer, UserSerializer, OrderItemSerializer, OrderSerializer, ReviewSerializer, CartSerializer, CartItemSerializer, AddToCartSerializer, UpdateCartItemSerializer
from .filters import ProductFilter


class RegisterUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
# -------------------------------Product CRUD ----------------------------------#


class ProductsViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
# allows the user to filter the products by color by redifining the get_queryset method
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_class = ProductFilter
    pagination_class = PageNumberPagination
    # allows the user to search for products by name or description, case insensitive
    search_fields = ['name', 'description']
    ordering_fields = ['price']

# provides the request to the serializer to automatically associate the product with the user
    def get_serializer_context(self):
        return {'request': self.request}

# allows the user to delete a product only if it is not associated with an orderitem
    def destroy(self, request, *args, **kwargs):

        if OrderItem.objects.filter(product_id=kwargs['pk']).count() > 0:
            return Response({'error': 'Product cannot be deleted because its associated with an orderitem pending'})

        return super().destroy(request, *args, **kwargs)

 # -------------------------------Review CRUD ----------------------------------#


class ReviewViewSet(ModelViewSet):
    serializer_class = ReviewSerializer
    # allows the user to only see the reviews for a specific product in the url path

    def get_queryset(self):
        return Review.objects.filter(product_id=self.kwargs['product_pk'])
# provides the product_id to the serializer to automatically associate the review with the product

    def get_serializer_context(self):
        return {'product_id': self.kwargs['product_pk']}

# -------------------------------CART CRUD ----------------------------------#


class CartViewSet(CreateModelMixin,
                  RetrieveModelMixin,
                  DestroyModelMixin,
                  GenericViewSet):
    # prefetch_related allows the user to see the cart items in the cart view without making additional unnecessary queries to the database
    # 'items__product' retrieves the product associated with the cart item so dont't have separate queries for each cart item
    queryset = Cart.objects.prefetch_related('items__product').all()
    serializer_class = CartSerializer


class CartItemViewSet(ModelViewSet):
    http_method_names = ['get', 'post', 'patch', 'delete']
    # override serializer class to create dynamic use of serializer class based on the request method
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return AddToCartSerializer
        elif self.request.method == 'PATCH':
            return UpdateCartItemSerializer
        return CartItemSerializer

    # provides the cart_id to the serializer to automatically associate the cart item with the cart
    def get_serializer_context(self):
        return {'cart_id': self.kwargs['cart_pk']}

    # allows the user to only see the cart items for a specific cart in the url path will allow to see cart items without other cart properties like id

    def get_queryset(self):
        return CartItem.objects\
            .filter(cart_id=self.kwargs['cart_pk'])\
            .select_related('product')


# -------------------------------Order CRUD ----------------------------------#

class OrderListCreateView(ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
#     # permission_classes = [IsAuthenticated]

#     # def get_queryset(self):
#     #     return Order.objects.filter(customer__user=self.request.user)

#     # def perform_create(self, serializer):
#     #     serializer.save(customer=self.request.user.customer)


class OrderItemCreateView(ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
#     # permission_classes = [IsAuthenticated]
