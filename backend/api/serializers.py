
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product, Cart, CartItem, Order


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        # tells django to accept password but don't return, so don't accidentally reveal the password
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'designer', 'price',
                  'description', 'colour', 'image', 'created_at']


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'user', 'products', 'total_quantity',
                  'total_price', 'created_at', 'updated_at']
        extra_kwargs = {"user": {"read_only": True}}


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['id', 'cart', 'product', 'quantity',
                  'total_price',]


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user', 'products',
                  'total_price', 'created_at']
        extra_kwargs = {"user": {"read_only": True}}
