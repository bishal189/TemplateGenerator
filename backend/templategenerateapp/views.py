import json
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate

@api_view(['POST'])
def pdf_generator_from_template(request):
    try:
        data=json.loads(request.body)
        client_first_name=data.get('client_first_name')
        client_middle_name=data.get('client_middle_name')
        client_last_name=data.get('client_last_name')
        client_address=data.get('client_address')
        client_city=data.get('client_city')
        client_state=data.get('client_state')
        client_postal_code=data.get('client_postal')
        ss_number=data.get('ss_number')
        bdate=data.get('bdate')
        account=data.get('account')
        dispute_reason_in_bullet_list=data.get('dispute_reason_in_bullet_list')
    except Exception as e:
        error=str(e)
        print(error)
        return Response({'error':f"Unexpected error occured {error}"},status=400)
