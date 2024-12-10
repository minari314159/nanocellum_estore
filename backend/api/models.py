
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Product(models.Model):
    class Colour(models.TextChoices):
        S = "S", "Default",
        K = "K", "Kiwi",
        P = "P", "Plum",
        B = "B", "Boisenberry",
        M = "M", "Dark Burgundy"

    title = models.CharField(max_length=100)
    designer = models.CharField(max_length=50, default="49th Parallel")
    price = models.FloatField()
    description = models.CharField(max_length=200)
    colour = models.CharField(
        max_length=5, choices=Colour.choices, default=Colour.S)
    image = models.ImageField(upload_to='uploads/product/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# Represents a user's cart


class Cart(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)  # Each user has one cart
    products = models.ManyToManyField(
        'Product',
        through='CartItem',  # Through model to manage quantities
        related_name='carts'
    )
    total_quantity = models.PositiveIntegerField(default=0)
    total_price = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cart of {self.user.username}"


# Manages the relationship between a Cart and Product. Includes a quantity field to track the number of each product
class CartItem(models.Model):
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name='cart_items')
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} of {self.product.title} in {self.cart.user.username}'s cart"

    @property
    def total_price(self):
        return self.product.price * self.quantity


class Order(models.Model):
    class OrderStatus(models.TextChoices):
        PENDING = 'Pending', 'Pending'
        PROCESSING = 'Processing', 'Processing'
        SHIPPED = 'Shipped', 'Shipped'
        COMPLETED = 'Completed', 'Completed'
        CANCELED = 'Canceled', 'Canceled'

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='orders')
    products = models.ManyToManyField(
        'Product',
        through='OrderItem',
        related_name='orders'
    )
    total_price = models.FloatField()
    created_at = models.DateTimeField


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    # Store price at the time of order placement
    price_per_item = models.FloatField()
    total_price = models.FloatField()  # Computed as quantity * price_per_item

    def __str__(self):
        return f"{self.quantity} x {self.product.title} (Order #{self.order.id})"

    def save(self, *args, **kwargs):
        """
        Override save method to calculate the total price dynamically
        whenever the quantity or price_per_item changes.
        """
        self.total_price = self.quantity * self.price_per_item
        super().save(*args, **kwargs)
