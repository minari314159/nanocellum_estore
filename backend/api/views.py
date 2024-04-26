
from itertools import product
from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import OrderItem, Product, Order, Address, Cart, CartItem
from .serializers import ProductSerializer, UserSerializer, OrderItemSerializer, OrderSerializer


class RegisterUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# -------------------------------Product CRUD ----------------------------------#

class ProductsListCreate(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetails(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'pk'

    def delete(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        if product.orderitems.count() > 0:
            return Response({'error': 'Product cannot be deleted because its associated with an orderitem pending'})
        product.delete()
        return Response(status=204)

# -------------------------------CART CRUD ----------------------------------#


class OrderListCreateView(ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     return Order.objects.filter(customer__user=self.request.user)

    # def perform_create(self, serializer):
    #     serializer.save(customer=self.request.user.customer)


class OrderItemCreateView(ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    # permission_classes = [IsAuthenticated]
