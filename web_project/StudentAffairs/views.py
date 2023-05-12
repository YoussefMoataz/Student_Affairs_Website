from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

# Create your views here.
def show_profile(request):
    return render(request,'app/show_profile.html')