from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.urls import reverse

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        context = {
            "user": request.user,
            "isAuthenticated": True
        }
        return render(request, "orders/index.html", context)
    else:
        return render(request, "orders/index.html", {"isAuthenticated": False})

def login_view(request):
    message = ""
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    print(username, password)
    if user is not None:
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        message = "authentication failed"
        return render(request, "orders/login.html", {"message": message})

def login_page_view(request):
    return render(request, "orders/login.html")

def logout_view(request):
    logout(request)
    context = {}
    return HttpResponseRedirect(reverse("index"))
