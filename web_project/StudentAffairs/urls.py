from django.urls import path

from . import views

urlpatterns = [
    path("profile/", views.add_profile, name="AddProfile"),
]