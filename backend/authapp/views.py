from django.shortcuts import render
import json
from google.oauth2 import id_token
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect
from rest_framework.decorators import api_view
import os
from .models import Account
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
import requests
from google.auth.transport import requests as google_requests

# Create your views here.
# logiin with google
@api_view(['POST'])
@csrf_exempt
def googleoauth(request):

        try:
        # Extract authorization code from the query parameters
            data=json.loads(request.body)
            authorization_code = data.get('code')

        # Exchange authorization code for ID token
            token_endpoint = 'https://oauth2.googleapis.com/token'
            CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
            CLIENT_SECRET = os.getenv('GOOGLE_CLIENT_SECRET')
            redirect_uri = 'http://localhost:5000/google'  # Replace with your redirect URI
            data = {
            'code': authorization_code,
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'redirect_uri': redirect_uri,
            'grant_type': 'authorization_code'
        }
            response = requests.post(token_endpoint, data=data)
            token_data = response.json()
            print(token_data)
            id_token_data = token_data.get('id_token')
            print(id_token_data)
            idinfo = id_token.verify_oauth2_token(id_token_data, google_requests.Request(), CLIENT_ID)
            if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError('Wrong issuer.')

            # Here you can create a user session or perform any other necessary actions.
            username=idinfo['name']
            email=idinfo['email']
            first_name=idinfo['given_name']
            last_name=idinfo['family_name']

            user,created=Account.objects.get_or_create(email=email)
            user.is_active=True
            user.save()
            refresh = RefreshToken.for_user(user)

            return Response({
            "message": "User created successfully",
            "refresh": str(refresh),
            "access": str(refresh.access_token)
            }, status=status.HTTP_201_CREATED)


        except Exception as e:
            print(e)
            return Response({'status':False})
@api_view(['POST'])
def register(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')  # Added email extraction
        password = data.get('password')
        print(data)

        if not password or not email:  # Check all the fields are provided
            print('not email')
            return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

        # Check if email is already in use
        if Account.objects.filter(email=email).exists():
            print('note a user')
            return Response({"error": "Email is already in use"}, status=status.HTTP_400_BAD_REQUEST)
        
        user = Account.objects.create_user(email=email, password=password)  # Pass email to create_users
        user.save()
      
       #  user activation

        # current_site=get_current_site(request)
        # mail_subject='Please activate your account'
        # message=render_to_string('accounts/account_verification_email.html',{
        #             'user':user,
        #             'domain':current_site,
        #             'uid':urlsafe_base64_encode(force_bytes(user.pk)),
        #             'token':default_token_generator.make_token(user),
        #         })
        # to_email=email
        # send_email=EmailMessage(mail_subject,message,to=[to_email])
        # send_email.content_subtype = 'html'
        # send_email.send()    
        
        refresh = RefreshToken.for_user(user)

        return Response({
            "message": "User created successfully",
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        error = str(e)
        print(error)
        return Response({'message': f"unexpected error {error}", 'status': False}, status=400)



@api_view(['POST'])
def login(request):

    try:
        data=json.loads(request.body)
        email =data.get('email')
        password =data.get('password')

        if not email or not password:
            return Response({"error": "Both email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, email=email, password=password)

        if user is None:
            return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)
        refresh = RefreshToken.for_user(user)


        return Response({
            "message": "Login successful",
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        error=str(e)
        print(error)
        return Response({'message':f"unexpected error {error}",'status':False},status=400)

