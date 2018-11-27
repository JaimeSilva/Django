from django.shortcuts import render
from django.http import HttpResponse
from appTwo.models import User
from . import forms
from django.utils import timezone


# Create your views here.

def index(request):
    return render(request,'apptwo/index.html')

def users(request):
    user_list = User.objects.order_by('first_name')
    user_dict = {"users":user_list}
    return render(request,'apptwo/users.html',context=user_dict)
