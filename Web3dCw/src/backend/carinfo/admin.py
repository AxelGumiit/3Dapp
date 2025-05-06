

from django.contrib import admin
from .models import CarInfo

@admin.register(CarInfo)
class CarInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'top_speed', 'acceleration', 'engine', 'horsepower')
