from django.urls import path
from .views import CarInfoList, CarInfoDetail  # Make sure to import both views

urlpatterns = [
    path('', CarInfoList.as_view(), name='car-info-list'),
    path('<int:id>/', CarInfoDetail.as_view(), name='car-info-detail'), 
]
