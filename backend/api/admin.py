from django.contrib import admin
from .models import Customer, OrderItem, Product, Cart, CartItem, Order
# Register your models here.
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Customer)
