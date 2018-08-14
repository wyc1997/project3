from django.urls import path
from django.contrib import admin

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("admin", admin.site.urls),
    path("login_page", views.login_page_view, name="login_page"),
    path("logout", views.logout_view, name="logout"),
    path("login", views.login_view, name="login")
]
