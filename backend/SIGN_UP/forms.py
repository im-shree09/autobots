from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User



class signupform(UserCreationForm):
    full_name = forms.CharField(max_length=100)
    email = forms.CharField(max_length=100)
    phone = forms.CharField(max_length=100)
    password = forms.CharField(max_length=100)
    c_passowrd = forms.CharField(max_length=100)

    class meta:
        model = User
        fields=("full_name" , 'password' , 'phone' ,'c_password' , 'email' )

    def save(self , commit = True):
        user = super(signupform , self).save(commit=False)
        user.full_name = self.cleaned_data['full_name']
        user.email = self.cleaned_data['email']
        phone = self.cleaned_data['phone']

        if commit:
            user.save()
        return user

       
