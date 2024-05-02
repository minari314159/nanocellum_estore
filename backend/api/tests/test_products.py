from django.contrib.auth.models import User
from api.models import Product
from rest_framework import status
import pytest
from model_bakery import baker


@pytest.fixture
def create_product(api_client):
    def do_create_product(product):
        return api_client.post('/api/products/', product)
    return do_create_product


@pytest.mark.django_db
class TestCreateProducts:
    def test_if_user_is_anonymous_returns_401(self,  create_product)
        response = create_product({'name': 'test product'})
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_if_user_is_not_admin_returns_403(self, api_client, create_product):
        api_client.force_authenticate(user={})
        response = create_product({'name': 'test product'})
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_if_data_is_invalid_returns_400(self, api_client, create_product):
        api_client.force_authenticate(user=User(is_staff=True))
        response = create_product({'name': ''})
        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert response.data['name'] is not None

    def test_if_data_is_valid_returns_201(self, api_client, create_product):
        api_client.force_authenticate(user=User(is_staff=True))
        response = create_product(
            {'name': 'test product', 'description': 'test description', 'color': 'test color', 'price': 10.00})
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['id'] is not None


@pytest.mark.django_db
class TestRetrieveProducts:
    def test_if_products_exist_returns_200(self, api_client):
        baker.make(Product)

        response = api_client.get('/api/products/')

        assert response.status_code == status.HTTP_200_OK



# @pytest.mark.django_db
# class TestDeleteProduct:
#     def test_if_product_does_not_exist_returns_404(self, api_client):
#         response = api_client.delete('/api/products/1/')

#         assert response.status_code == status.HTTP_404_NOT_FOUND

#     def test_if_product_exists_returns_204(self, api_client):
#         product = baker.make(Product)
#         response = api_client.delete(f'/api/products/{product.id}/')

#         assert response.status_code == status.HTTP_204_NO_CONTENT
#         assert not Product.objects.filter(id=product.id).exists()
