from django.db import models

class Student(models.Model):
    id = models.CharField(name="id", primary_key=True, max_length=8)
    name = models.CharField(name="name", max_length=100)
    dateOfBirth = models.DateField(name="dateOfBirth")
    gpa = models.DecimalField(name="gpa", max_digits=3, decimal_places=2)
    level = models.IntegerField(name="level")
    department = models.CharField(name="department", max_length=2)
    email = models.EmailField(name="email")
    phone = models.CharField(name="phone", max_length=12)
    gender = models.BooleanField(name="gender")
    status = models.BooleanField(name="status")

    def __str__(self):
        return self.id
