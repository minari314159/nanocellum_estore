from django.contrib.auth.models import User
from rest_framework import serializers
from .models import OrderItem, Product, Customer, Order, ShippingAddress


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name',
                  'description', 'color', 'price', 'image']


class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = OrderItem
        fields = ['product', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'email', 'created_at']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        # ensures password not returned/viewed
        extra_kwargs = {"password": {"write_only": True}}
# implements a emthod to create a new version fo the user

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
