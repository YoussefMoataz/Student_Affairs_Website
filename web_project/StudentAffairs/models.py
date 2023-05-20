from django.db import models

class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    sid = models.CharField(name="studentID", max_length=8)
    name = models.CharField(name="studentName", max_length=100)
    dateOfBirth = models.CharField(name="studentBirthDate", max_length=50)
    gpa = models.CharField(name="studentGPA", max_length=5)
    level = models.CharField(name="studentLevel", max_length=1)
    department = models.CharField(name="studentDepartment", max_length=2, blank=True)
    email = models.CharField(name="studentEmail", max_length=100)
    phone = models.CharField(name="studentPhone", max_length=13)
    gender = models.CharField(name="studentGender", max_length=1)
    status = models.CharField(name="studentStatus", max_length=1, blank=True, default="0")

    def __str__(self):
       return str(self.id)
    


class User(models.Model):
    Id = models.IntegerField(primary_key = True)
    userId = models.CharField(name = "userId", max_length = 8)
    userName = models.CharField(name = "userName", max_length = 15)
    userPassword = models.CharField(name = "password", max_length = 8)
    
    def __str__(self):
       return str(self.Id)