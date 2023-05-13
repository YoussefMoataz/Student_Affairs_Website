from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

from .forms import StudentForm


def show_profile(request):
    stud_form = StudentForm()
    mapping = {"form" : stud_form}
    return render(request,'app/show_profile.html', context=mapping)