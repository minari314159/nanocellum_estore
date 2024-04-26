from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("user/register/", views.RegisterUserView.as_view(), name="register"),
    path("users/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("users/token/refresh/", TokenRefreshView.as_view(), name="refresh_token"),
    path("api-auth/", include("rest_framework.urls")),

    path('products/', views.ProductsListCreate.as_view(),
         name='products-view-create'),
    path('products/<uuid:pk>/', views.ProductDetails.as_view(),
         name='product-view-create-delete'),

    path('orders/', views.OrderListCreateView.as_view(), name='order_summary'),
    path('orderitems/', views.OrderItemCreateView.as_view(),
         name='orderitem-create'),
  
]
