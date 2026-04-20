from django.shortcuts import render
from food.models import Food



def meno(request):
    foods = Food.objects.all()
    return render(request, 'food/index.html', {'foods':foods}) 



