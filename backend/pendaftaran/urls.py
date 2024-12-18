# urls.py
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('pendaftaran', PendaftaranViewSet, basename='Pendaftaran')
router.register('klinik', KlinikViewSet, basename='Klinik')
router.register('daerah', DaerahViewSet, basename='Daerah')
urlpatterns = router.urls

