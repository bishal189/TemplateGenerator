from django.shortcuts import render
import json
from google.oauth2 import id_token
from google.auth.transport import requests
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import os
# Create your views here.
# logiin with google
@api_view(['POST'])
@csrf_exempt
def googleoauth(request):

        try:
            data=json.loads(request.body)
            id_token_data = data['id_token']

            CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
            idinfo = id_token.verify_oauth2_token(id_token_data, requests.Request(), CLIENT_ID)
            print(idinfo)
            if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError('Wrong issuer.')

            # Here you can create a user session or perform any other necessary actions.
            username=idinfo['name']
            email=idinfo['email']
            first_name=idinfo['given_name']
            last_name=idinfo['family_name']
            '''
            user,created=Account.objects.get_or_create(email=email,username=username,first_name=first_name,last_name=last_name)
            user.is_active=True
            user.save()
            auth.login(request,user)
            response={
                'message':'Login Successfull',
                'user':RegistrationSerializer(user).data,
                'status':status.HTTP_200_OK,
            }'''
            print(username,email,first_name,last_name)
            return Response(response)
        except Exception as e:
            print(e)
            return Response({'status':False})
