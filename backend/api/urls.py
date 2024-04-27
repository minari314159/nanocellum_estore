from django.urls import path, include
from rest_framework_nested import routers
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
router.register(r'products', views.ProductsViewSet, basename='products')
router.register(r'cart', views.CartViewSet, basename='cart')
router.register(r'cartitems', views.CartItemViewSet, basename='cartitems')
router.urls

products_router = routers.NestedDefaultRouter(
    router, 'products', lookup='product')
products_router.register('reviews', views.ReviewViewSet,
                         basename='product-reviews')
carts_router = routers.NestedDefaultRouter(
    router, 'cart', lookup='cart')
carts_router.register('items', views.CartItemViewSet,
                         basename='cart-items')

urlpatterns = [
    path("user/register/", views.RegisterUserView.as_view(), name="register"),
    path("users/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("users/token/refresh/", TokenRefreshView.as_view(), name="refresh_token"),
    path("api-auth/", include("rest_framework.urls")),

    path('orders/', views.OrderListCreateView.as_view(), name='order_summary'),
    path('orderitems/', views.OrderItemCreateView.as_view(),
         name='orderitem-create'),

] + router.urls + products_router.urls + carts_router.urls
