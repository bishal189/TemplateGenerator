from django.urls import path
from authapp import views
urlpatterns=[
    path('google',views.googleoauth),
    path('register/', views.register),
    path('login/',views.login),
    
    
    ]
