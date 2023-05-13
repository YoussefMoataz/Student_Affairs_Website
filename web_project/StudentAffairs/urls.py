from django.urls import path

from . import views

urlpatterns = [
    path("profile/", views.add_profile, name="AddProfile"),
    path("profile/<int:st_id>", views.show_profile, name="ShowProfile"),
    path("profile/update/<int:st_id>", views.update_profile, name="UpdateProfile"),
]