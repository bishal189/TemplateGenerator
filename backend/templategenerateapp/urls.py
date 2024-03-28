from django.urls import path
from templategenerateapp import views

urlpatterns=[
    path('account_template/',views.pdf_generator_from_account_template),
    path('all_purpose_credit_template/',views.pdf_generator_from_all_purpose_credit_template),
    path('bankruptcy_template/',views.pdf_generator_from_bankruptcy_template),
    path('downloadfile/<filename>/',views.download_file)
    ]
