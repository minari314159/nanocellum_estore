from django.contrib import admin
from django.utils.html import format_html, urlencode
from django.contrib import admin, messages
from django.urls import reverse
from django.db.models.aggregates import Count
from django.db.models.query import QuerySet
from .models import OrderItem, Product, Customer, Order


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name',  'membership', 'orders']
    list_editable = ['membership']
    list_per_page = 10
    list_select_related = ['user']
    ordering = ['user__first_name', 'user__last_name']
    search_fields = ['first_name__istartswith', 'last_name__istartswith']

    @admin.display(ordering='orders_count')
    def orders(self, customer):
        pass
        # url = (
        #     reverse('admin:store_order_changelist')
        #     + '?'
        #     + urlencode({
        #         'customer__id': str(customer.id)
        #     }))
        # return format_html('<a href="{}">{} Orders</a>', url, customer.orders_count)

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(
            orders_count=Count('order')
        )


class InventoryFilter(admin.SimpleListFilter):
    title = 'inventory'
    parameter_name = 'inventory'

    def lookups(self, request, model_admin):
        return [
            ('<10', 'Low')
        ]

    def queryset(self, request, queryset: QuerySet):
        if self.value() == '<10':
            return queryset.filter(inventory__lt=10)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    actions = ['clear_inventory']
    list_display = ['name', 'price',
                    'inventory_status',]
    list_editable = ['price']
    list_per_page = 10

    search_fields = ['name']

    @admin.display(ordering='inventory')
    def inventory_status(self, product):
        if product.inventory < 10:
            return 'Low'
        return 'OK'

    @admin.action(description='Clear inventory')
    def clear_inventory(self, request, queryset):
        updated_count = queryset.update(inventory=0)
        self.message_user(
            request,
            f'{updated_count} products were successfully updated.',
            messages.ERROR
        )


admin.site.register(Order)
admin.site.register(OrderItem)
