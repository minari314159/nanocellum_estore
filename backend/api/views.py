from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer, ProductSerializer
from .models import Product
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

# Create your views here.


class ProductList(APIView):
    """
    - GET: Allows anyone to retrieve the list of products.
    - POST, PUT, DELETE: Restricted to admin users only.
    """
    model = Product

    def get_permissions(self):
        """
        Set permissions dynamically:
        - Allow anyone for GET requests.
        - Require admin privileges for POST, PUT, DELETE.
        """
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAdminUser()]

    def get(self, request):
        """Retrieve all products (accessible by anyone)."""
        queryset = Product.objects.all()
        serializer = ProductSerializer(
            queryset, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Create a new product (admin only)."""
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ProductDetail(APIView):
    def get_permissions(self):
        """
        Set permissions dynamically:
        - Allow anyone for GET requests.
        - Require admin privileges for POST, PUT, DELETE.
        """
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAdminUser()]

    def get(self, request, id):
        product = get_object_or_404(Product, pk=id)
        serializer = ProductSerializer(product)
        return Response(serializer.data,  status=status.HTTP_200_OK)

    def put(self, request, id):
        """Update an existing product (admin only)."""
        product = get_object_or_404(Product, pk=id)
        serializer = ProductSerializer(
            product, data=request.data)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, id):
        """Delete a product (admin only)."""
        product = get_object_or_404(Product, pk=id)
        product.delete()
        return Response(
            {"detail": "Product deleted successfully."},
            status=status.HTTP_204_NO_CONTENT)


class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
