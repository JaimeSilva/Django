from django.conf.urls import url
from appTwo import views

urlpatterns = [
    url(r'^$',views.users,name='users'),
    url(r'^$',views.form_name_view,name='form_name_view'),


]
