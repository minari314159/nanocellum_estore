from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CartSerializer, ReviewSerializer, UserSerializer, ProductSerializer, CartItemSerializer
from .models import Cart, CartItem, Product, Review
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAdminUser

# Create your views here.


class ProductList(ListCreateAPIView):
    """
    - GET: Allows anyone to retrieve the list of products.
    - POST, PUT, DELETE: Restricted to admin users only.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_permissions(self):
        """
        Set permissions dynamically:
        - Allow anyone for GET requests.
        - Require admin privileges for POST, PUT, DELETE.
        """
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAdminUser()]

    def get_serializer_context(self):
        return {'request': self.request}


class ProductDetail(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'

    def get_permissions(self):
        """
        Set permissions dynamically:
        - Allow anyone for GET requests.
        - Require admin privileges for POST, PUT, DELETE.
        """
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAdminUser()]

    def delete(self, request, id):
        """Delete a product (admin only)."""
        product = get_object_or_404(Product, pk=id)
        product.delete()
        return Response(
            {"detail": "Product deleted successfully."},
            status=status.HTTP_204_NO_CONTENT)


class ReviewList(ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [AllowAny]


class ReviewDetail(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class CreateCart(CreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [AllowAny]


class CartDetail(RetrieveUpdateDestroyAPIView):
    queryset = CartItem.objects.prefetch_related('items__product').all()
    serializer_class = CartItemSerializer
    lookup_field = 'id'
    permission_classes = [AllowAny]
