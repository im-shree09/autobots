from .views import *
from django.urls import path,include

urlpatterns = [
     path("sign_up/" , sign_up , name = "signup"),
     path("login/" , login_user , name = "login")
]