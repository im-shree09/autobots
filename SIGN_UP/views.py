from django.shortcuts import render , redirect
from django.http import HttpResponse,JsonResponse
from .forms import *
from restapiapp.models import MyTeamMember
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate , login


# Create your views here.


def sign_up(request):
    if request.method=='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')
        email = request.POST.get('email')
        print(username , password)

        if username and password and password2 and email:
            if password != password2:
                return HttpResponse("PASSWORD DID NOT MATCH")
            else:
                password = make_password(password=password)
                user = User.objects.create(username = username , password = password , email = email)
                user.save()
                return render(request , 'login.html')
         

    else:
        form = signupform()
    return render(request , 'register.html')


def login_user(request):
    if request.method=='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username , password)
        
        user = authenticate(username = username , password = password)
        if user is not None:
            # if user.is_active:
            print(user)
            login(request , user)
            return HttpResponse("LOGIN SUCCESS")
        else:
            return render(request ,"login.html" , {"msg" : "Invalid username and password"})    
    return render(request , 'login.html')