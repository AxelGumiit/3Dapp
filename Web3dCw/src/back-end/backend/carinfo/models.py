from django.db import models

class CarInfo(models.Model):
    name = models.CharField(max_length=100)
    top_speed = models.CharField(max_length=50)
    acceleration = models.CharField(max_length=50)
    engine = models.CharField(max_length=100)
    horsepower = models.CharField(max_length=50)

    def __str__(self):
        return self.name
