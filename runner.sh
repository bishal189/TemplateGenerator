#!/bin/bash


cd backend
source env/bin/activate
python manage.py runserver 

bash 
cd ../frontend
npm run dev
