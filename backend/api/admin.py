from django.contrib import admin
from .models import CartItem, Product, Cart, Order

admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Order)
