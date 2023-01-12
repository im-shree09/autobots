from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model 
from rest_framework import serializers
from .models import Student, Project, Team, TeamMember, MyProject,MyTeam,MyTeamMember

from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password





class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields="__all__"
        # fields=['id','name','roll','city']

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model=Team
        fields="__all__"
        # fields=['team_name','team_start_date','team_end_date','team_lead','team_lead_email']

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model=TeamMember
        fields="__all__"
        # fields=['team_name','name','role','email']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields="__all__"
        # fields=['proj_name','proj_start_date','proj_end_date','manager_name','manager_email','status','desc']

class MyProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=MyProject
        fields="__all__"
        
        
class MyTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model=MyTeam
        fields="__all__"
        

class MyTeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model=MyTeamMember
        fields="__all__"
        # fields=['proj_name','proj_start_date','proj_end_date','manager_name','manager_email','status','desc']

# class MyProjectTest(serializers.ModelSerializer):
#     class Meta:
#         model = MyProject
#         fields = "__all__"


# ====================================================================================================================

#Serializer to Get User Details using Django Token Authentication
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["id", "first_name", "last_name", "username"]


#Serializer to Register User
class RegisterSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=User.objects.all())]
  )
  password = serializers.CharField(
    write_only=True, required=True, validators=[validate_password])
  password2 = serializers.CharField(write_only=True, required=True)
  class Meta:
    model = User
    fields = ('username', 'password', 'password2',
         'email', 'first_name', 'last_name')
    extra_kwargs = {
      'first_name': {'required': True},
      'last_name': {'required': True}
    }
  def validate(self, attrs):
    if attrs['password'] != attrs['password2']:
      raise serializers.ValidationError(
        {"password": "Password fields didn't match."})
    return attrs
  def create(self, validated_data):
    user = User.objects.create(
      username=validated_data['username'],
      email=validated_data['email'],
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name']
    )
    user.set_password(validated_data['password'])
    user.save()
    return user


# LOGIN SERIALIZERS

class C_UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    class Meta:
        model = User
        fields = ['username', 'password']




# =========================================================================================================
