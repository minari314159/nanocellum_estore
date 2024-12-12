from django.urls import path
from .views import ProductList, ProductDetail, ReviewList, ReviewDetail, CartList
urlpatterns = [
    path('products/', ProductList.as_view(), name='products-list'),
    path('products/<int:id>/',
         ProductDetail.as_view(), name='product-detail'),
    path('products/<int:id>/reviews/',
         ReviewList.as_view(), name='reviews-list'),
    path('products/<int:id>/reviews/<int:review_id>/',
         ReviewDetail.as_view(), name='review-detail'),
    path('carts/', CartList.as_view(), name='carts'),
    # path('carts/<int:id>/',
    #      CartDetail.as_view(), name='cart-detail'),
    # path('carts/<int:id>/items/',
    #      ReviewList.as_view(), name='items-list'),
    # path('products/<int:id>/reviews/<int:item_id>/',
    #      ReviewDetail.as_view(), name='item-detail'),
]
