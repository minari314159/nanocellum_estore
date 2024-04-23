from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product, CartItem, Order


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'creator',
                  'description', 'color', 'price', 'image']
        extra_kwargs = {"creator": {"read_only": True}}


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = CartItem
        fields = ['product', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'items', 'total_price', 'created_at']


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
