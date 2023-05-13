from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

from .forms import StudentForm
from .models import Student


def add_profile(request):
    stud_form = StudentForm()

    last_id = len(Student.objects.all())

    # print(last_id)

    if request.method == "POST":
        student = Student()
        
        # if stud_form.is_valid():
        #     stud_form.save()

        student.sid = request.POST['studentID']
        student.name = request.POST['studentName']
        student.dateOfBirth = request.POST['studentBirthDate']
        student.gpa = request.POST['studentGPA']
        student.level = request.POST['studentLevel']
        student.department = request.POST.get('studentDepartment', "")
        student.email = request.POST['studentEmail']
        student.phone = request.POST['studentPhone']
        student.gender = request.POST['studentGender']
        student.status = request.POST.get('studentStatus', "0")

        # print(student.id)
        # print(student.name)
        # print(student.dateOfBirth)
        # print(student.gpa)
        # print(student.level)
        # print(student.department)
        # print(student.email)
        # print(student.phone)
        # print(student.gender)
        # print(student.status)

        # stud_form = StudentForm(request.POST)
        # print(stud_form)

        # stud_form = StudentForm(request.POST, instance=student)

        stud_form = StudentForm(request.POST)
        # print(stud_form)
        if stud_form.is_valid():
            # print("done")
            stud_form.save()
            return HttpResponse("Thank you")
    
    ctx = {"lastID": last_id}
    return render(request,'app/show_profile.html', context=ctx)


def show_profile(request, st_id):
    
    student = Student.objects.get(studentID=st_id)
    
    ctx = {"stud" : student}

    return render(request,'app/show_profile.html', context=ctx)