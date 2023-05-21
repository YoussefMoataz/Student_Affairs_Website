from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="Index"),
    path("app/profile/", views.add_profile, name="AddProfile"),
    path("app/all_students/profile/<int:st_id>", views.show_profile, name="ShowProfile"),
    path("app/all_students/profile/update/<int:st_id>", views.update_profile, name="UpdateProfile"),
    path("app/all_students/profile/delete/<int:st_id>", views.delete_profile, name="DeleteProfile"),
    path("app/all_students/profile/department/<int:st_id>", views.department_assign, name="DepartmentAssign"),
    path("app/all_students/", views.all_students , name="AllStudents"),
    path('app/add_user/', views.add_user, name='AddUser'),
    path('app/view_user/', views.view_user, name='ViewUser'),
    path("app/home/", views.home, name="home"),
    path("login/", views.login, name="Login"),

]