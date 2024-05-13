from django.contrib import admin
from django.urls import path, include

from . import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('core.urls'), name='core'),
    path('admin/', admin.site.urls),
    path('api/', include("api.urls"), name='api'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
