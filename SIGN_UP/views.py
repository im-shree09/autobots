from django.shortcuts import render , redirect
from django.http import HttpResponse,JsonResponse
from .forms import *
from restapiapp.models import MyTeamMember
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate , login
from restapiapp.views import MyProjectViewSet
from rest_framework.response import Response
from rest_framework import status,viewsets
from restapiapp.serializers import *
# Create your views here.
# class MyProjectViewSet(viewsets.ViewSet):
#     # GET all students
#     def list(self,request):
#         stu= MyProject.objects.all()
#         serializer= MyProjectSerializer(stu,many=True)  
#         context={
#             'stu':stu
#         }   
#         return render(request, 'index.html', context)
#         # return Response(serializer.data)
#     # GET specific student
#     def retrieve(self, request, pk=None):
#         team_id=pk
#         if team_id is not None:
#             team=MyProject.objects.get(team_id=team_id)
#             serializer=MyProjectSerializer(team)  
#             return Response(serializer.data)
#     # POST student
#     def create(self, request):
#         serializer=MyProjectSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'msg':'Data created!'}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
#     # UPDATE totally
#     def update(self,request, pk):
#         id=pk
#         stu=MyProject.objects.get(pk=id)
#         serializer=MyProjectSerializer(stu,data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'msg':'Complete Data Updated!'}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

#     # UPDATE partial
#     def partial_update(self,request, pk):
#         id=pk
#         stu=MyProject.objects.get(pk=id)
#         serializer=MyProjectSerializer(stu,data=request.data,partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'msg':'Complete Data Updated!'}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
#     # DELETE
#     def destroy(self,request,pk):
#         id=pk
#         stu=MyProject.objects.get(pk=id)
#         stu.delete()
#         return Response({'msg':'Data Deleted!'})

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
            # MyProjectViewSet.list(user,method="GET")
            return render(request,'index.html')
            # return HttpResponse('Success!')
        else:
            return render(request ,"login.html" , {"msg" : "Invalid username and password"})    
    return render(request , 'login.html')