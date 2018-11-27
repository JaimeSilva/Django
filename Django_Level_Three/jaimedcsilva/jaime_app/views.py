
from django.shortcuts import render

# Create your views here.
def index(request):
    mydic = {"INSERT1":"Django mambo1","INSERT2":"Django mambo2","INSERT3":"Django mambo3"}
    return render(request,'jaime_app/index.html', mydic)

def heaven(request):
    return render(request, 'jaime_app/heaven.html')

def nature(request):
    return render(request, 'jaime_app/reg.html')

def root(request):
    return render(request, 'jaime_app/root.html')
