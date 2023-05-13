from django.urls import path

from . import views

urlpatterns = [
    path("profile/", views.show_profile, name="ShowProfile"),
]