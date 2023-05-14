from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="Index"),
    path("app/profile/", views.add_profile, name="AddProfile"),
    path("app/profile/<int:st_id>", views.show_profile, name="ShowProfile"),
    path("app/profile/update/<int:st_id>", views.update_profile, name="UpdateProfile"),
    path("app/profile/delete/<int:st_id>", views.delete_profile, name="DeleteProfile"),
]