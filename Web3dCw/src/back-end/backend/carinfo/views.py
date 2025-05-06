from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import CarInfo
from .serializer import CarInfoSerializer

class CarInfoList(APIView):
    def get(self, request):
    

        cars = CarInfo.objects.all()
        serializer = CarInfoSerializer(cars, many=True)
        return Response(serializer.data)

class CarInfoDetail(APIView):
    def get(self, request, id):
        try:
            car = CarInfo.objects.get(id=id)
        except CarInfo.DoesNotExist:
            return Response({"error": "Car not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CarInfoSerializer(car)
        return Response(serializer.data)
