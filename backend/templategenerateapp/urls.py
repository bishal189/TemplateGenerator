from django.urls import path
from templategenerateapp import views

urlpatterns=[
    path('account_template/',views.pdf_generator_from_account_template),
    path('all_purpose_credit_template/',views.pdf_generator_from_all_purpose_credit_template),
    path('bankruptcy_template/',views.pdf_generator_from_bankruptcy_template),
    path('collection_template/',views.pdf_generator_from_collection_template),
    path('identity_theft_affidavit_template/',views.pdf_generator_from_identity_theft_affidavit_template),
    path('identity_theft_fcra_template/',views.pdf_generator_from_identity_theft_fcra_template),
    path('inquiry_template/',views.pdf_generator_from_inquiry_template),
    path('personal_information_template/',views.pdf_generator_from_personal_information_template),
    path('downloadfile/<filename>/',views.download_file)
    ]
