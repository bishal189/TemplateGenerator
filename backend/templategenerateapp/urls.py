from django.urls import path
from templategenerateapp import views

urlpatterns=[
    path('generate/',views.pdf_generator_from_template),
    path('downloadfile/<filename>/',views.download_file)
    ]