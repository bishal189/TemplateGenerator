from .models import Account
import json
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

@api_view(['POST'])
def register(request):
    print('hello world')
    try:
        data = json.loads(request.body)
        email = data.get('email')  # Added email extraction
        password = data.get('password')

        if not password or not email:  # Check all the fields are provided
            return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

        # Check if email is already in use
        if Account.objects.filter(email=email).exists():
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
