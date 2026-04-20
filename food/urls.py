from django.urls import path
from food.views import (
    meno,
    #aboot,
)


urlpatterns = [
    path('meno/', meno , name='meno'),
    #path('aboot/', aboot , name='abot'),





]