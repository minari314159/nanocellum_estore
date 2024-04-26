from django.contrib import admin
from .models import OrderItem, Product, Customer, Order

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)

