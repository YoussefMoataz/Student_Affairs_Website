from django import forms
from django.forms import ModelForm
from .models import Student

class StudentForm(ModelForm):

    class Meta:
        model = Student
        fields = ['id', 'name', 'dateOfBirth', 'gpa', 'level', 'department', 'email', 'phone', 'gender', 'status']