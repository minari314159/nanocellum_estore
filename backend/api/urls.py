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

    # path('cart/<int:user_id>/', views.cart_detail, name='cart_detail'),
    # path('add-to-cart/', views.add_to_cart, name='add_to_cart'),
    # path('checkout/', views.checkout, name='checkout'),
]
