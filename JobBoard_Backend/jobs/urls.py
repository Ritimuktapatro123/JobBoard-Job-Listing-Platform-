# jobs/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet

router = DefaultRouter()
router.register(r'', JobViewSet)  # or 'jobs' if you prefer /api/jobs/jobs/

urlpatterns = router.urls
