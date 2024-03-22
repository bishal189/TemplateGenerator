from django.urls import path
from authapp import views
urlpatterns=[
   
    path('register/', views.register),
    path('login/',views.login),
    
    
    ]