from .views import *
from django.urls import path,include
from django.contrib.auth.decorators import login_required

urlpatterns = [
     path("sign_up/" , sign_up , name = "signup"),
     path("login/" , login_user , name = "login") ,
     path("index/" , HomeView.as_view() , name = "index"),
     path('logout/' , log_out , name="logout" ) ,
     path("project_list/", project_list, name="project_list")
]