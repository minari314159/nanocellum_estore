
from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListCreateAPIView, CreateAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.pagination import PageNumberPagination
from .models import OrderItem, Product, Order, Review
from .serializers import ProductSerializer, UserSerializer, OrderItemSerializer, OrderSerializer, ReviewSerializer
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
