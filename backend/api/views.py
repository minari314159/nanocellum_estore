
from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import OrderItem, Product, Order, ShippingAddress
from .serializers import ProductSerializer, UserSerializer, OrderItemSerializer, OrderSerializer, ShippingAddressSerializer


class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# -------------------------------Product CRUD ----------------------------------#

class ProductsListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def update(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response(status=status.HTTP_403_FORBIDDEN)
        return super().update(request, *args, **kwargs)


class ProductDetails(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    lookup_field = "pk"
# -------------------------------CART CRUD ----------------------------------#


class OrderListCreateView(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(customer__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user.customer)


class OrderItemCreateView(generics.CreateAPIView):
    serializer_class = OrderItemSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(order=self.request.user.customer.order)


class ShippingAddressCreateView(generics.CreateAPIView):
    serializer_class = ShippingAddressSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user.customer)


class Checkout(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)
