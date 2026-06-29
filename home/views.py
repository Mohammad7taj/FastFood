from django.shortcuts import render
from home.models import Sijal , Pishnahadroz

def home(request):
    pishs = Pishnahadroz.objects.all()
    context = {'pishs':pishs}
    return render(request, 'home/home.html', context)
    


def sijal_view(request):
    sijals = Sijal.objects.all()
    context = {'sijals': sijals}
    return render(request, 'home/sijal.html', context)