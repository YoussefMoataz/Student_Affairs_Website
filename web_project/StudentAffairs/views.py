from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse

from .forms import StudentForm
from .models import Student


def add_profile(request):
    stud_form = StudentForm()

    last_id = 0

    if Student.objects.count() > 0:
        last_id = Student.objects.order_by('-pk')[0]

    # print(last_id)
    ctx = {"lastID": last_id}


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
        ctx["submittedForm"] = stud_form
        return render(request,'app/show_profile.html', context=ctx)
    
    
    return render(request,'app/show_profile.html', context=ctx)


def show_profile(request, st_id):
    
    student = Student.objects.get(studentID=st_id)
    
    ctx = {"stud" : student}

    return render(request,'app/show_profile.html', context=ctx)


def update_profile(request, st_id):
    
    student = Student.objects.filter(studentID=st_id)

    student.update(studentName=request.POST['studentName'])
    student.update(studentBirthDate=request.POST['studentBirthDate'])
    student.update(studentGPA=request.POST['studentGPA'])
    student.update(studentLevel=request.POST['studentLevel'])
    student.update(studentDepartment=request.POST.get('studentDepartment', ""))
    student.update(studentEmail=request.POST['studentEmail'])
    student.update(studentPhone=request.POST['studentPhone'])
    student.update(studentGender=request.POST['studentGender'])
    student.update(studentStatus=request.POST.get('studentStatus', "0"))


    # student.save()

    # print(student.name, student.email)
    # print(request.POST)

    return redirect(add_profile)

def delete_profile(request, st_id):
    
    Student.objects.get(studentID=st_id).delete()

    # student.save()

    # print(student.name, student.email)
    # print(request.POST)

    return redirect(add_profile)
