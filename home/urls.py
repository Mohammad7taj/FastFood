from django.urls import path
from home.views import home , sijal_view 



urlpatterns = [
    path('home/', home , name='home'),
    path('sijal/', sijal_view , name='sijal'),

]
