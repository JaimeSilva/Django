from django.shortcuts import render
from myapp.models import Topic, Sensor

# Create your views here.
def index(request):
    mydic = {"INSERT1":"Django mambo1","INSERT2":"Django mambo2","INSERT3":"Django mambo3"}
    return render(request,'myapp/index.html', mydic)


def users(request):
    users_list = Topic.objects.order_by('top_name')
    users_dict = {'user_tag':users_list}
    return render(request, 'myapp/users.html', context = users_dict)

def sensor(request):
    obj= Sensor.objects.filter(name="Cali").order_by('-id')[0]
    obj2= Sensor.objects.filter(name="Dojo").order_by('-id')[0]
    obj3= Sensor.objects.filter(name="Japan").order_by('-id')[0]
    users_dict = {'sensor_tag':obj,'dojo':obj2, 'Japan':obj3}
    return render(request, 'myapp/sensor.html', context = users_dict)

def refresh(request):
    return render(request,'myapp/sensor.html')
