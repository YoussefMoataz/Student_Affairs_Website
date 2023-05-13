from django import forms
from django.forms import ModelForm
from .models import Student

class StudentForm(ModelForm):

    class Meta:
        model = Student
        fields = ['studentID', 'studentName', 'studentBirthDate', 
                  'studentGPA', 'studentLevel', 'studentDepartment', 
                  'studentEmail', 'studentPhone', 'studentGender', 'studentStatus']