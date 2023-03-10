from django.shortcuts import render
from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import *
from django.shortcuts import render


### all comments with the triple hashtags are me, Eric.


def loginPage(request):
    if request.user.is_authenticated:
        return redirect("home")
    else:
        if request.method == "POST":
            username = request.POST.get("username")
            password = request.POST.get("password")
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect("home")
            else:
                messages.info(request, "Username or Password Is Incorrect")
                return redirect("login")

        return render(request, "login.html")


def registerPage(request):
    if request.user.is_authenticated:
        return redirect("home")
    else:
        form = CreateUserForm()
        if request.method == "POST":
            form = CreateUserForm(request.POST)
            if form.is_valid():
                user = form.save()
                username = form.cleaned_data.get("username")
                messages.success(request, "Account was created for " + username)

                Person.objects.create(user=user, name=user.username)

                return redirect("login")
        context = {"form": form}
        return render(request, "register.html", context)


def logoutUser(request):
    logout(request)
    return redirect("login")




@login_required(login_url="login")
def homePage(request):
    context = {}
    return render(request, "homePage.html", context)


@login_required(login_url="login")
def editPage(request):
    context = {}
    return render(request, "editPage.html", context)


@login_required(login_url="login")
def visPage(request):
    context = {}
    return render(request, "vis.html", context)


@login_required(login_url="login")
def dontWorry(request):
    context = {}
    return render(request, "donttouch.html", context)



