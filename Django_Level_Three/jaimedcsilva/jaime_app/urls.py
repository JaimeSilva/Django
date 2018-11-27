from django.shortcuts import render
from django.conf.urls import url
from jaime_app import views

urlpatterns = [
    url(r'^$', views.index, name ='index'),
    url(r'heaven', views.heaven, name ='heaven'),
    url(r'num|word', views.nature, name ='nature'),
]
