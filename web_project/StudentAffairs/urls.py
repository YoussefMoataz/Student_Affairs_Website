from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="Index"),
    path("app/profile/", views.add_profile, name="AddProfile"),
    path("app/all_students/profile/<int:st_id>", views.show_profile, name="ShowProfile"),
    path("app/all_students/profile/update/<int:st_id>", views.update_profile, name="UpdateProfile"),
    path("app/all_students/profile/delete/<int:st_id>", views.delete_profile, name="DeleteProfile"),
    path("app/all_students/", views.all_students , name="all_students"),

]