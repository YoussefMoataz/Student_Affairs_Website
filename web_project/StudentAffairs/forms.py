from django import forms
from django.forms import ModelForm
from .models import Student, User

class StudentForm(ModelForm):

    class Meta:
        model = Student
        fields = ['studentID', 'studentName', 'studentBirthDate', 
                  'studentGPA', 'studentLevel', 'studentDepartment', 
                  'studentEmail', 'studentPhone', 'studentGender', 'studentStatus']
        


class UserForm(ModelForm):

    class Meta:
        model = User
        fields = ['userId', 'userName', 'userPassword']
