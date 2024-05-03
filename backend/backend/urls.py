from django.contrib import admin
from django.urls import path, include
from .settings import dev, common
from django.conf.urls.static import static

urlpatterns = [
	path('', include('core.urls'), name='core'),
    path('admin/', admin.site.urls),
    path("api/", include("api.urls")),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
] 

if dev.DEBUG:
	urlpatterns += static(common.MEDIA_URL, document_root=common.MEDIA_ROOT)
