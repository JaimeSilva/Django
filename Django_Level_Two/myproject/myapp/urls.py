from django.conf.urls import url
from myapp import views

urlpatterns = [
    url(r'^$', views.sensor, name ='sensor'),
    url(r'^$', views.users, name ='users'),
    url(r'^$', views.refresh, name ='refresh'),

]
