from django.urls import path
from authapp import views
urlpatterns=[
    path('google/',views.googleoauth),
    ]
