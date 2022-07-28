from django.shortcuts import render,redirect
from account_app.models import User

# Create your views here.
def learning(request):
    return render(request, 'learning.html')

def learning_python(request):
    return render(request, 'learning_python.html')

def detail_python1(request):
    return render(request, 'detail_python1.html')

def python1_1(request):
    return render(request, 'index.html')

def python1_1_complete(request):
    return render(request, 'complete.html')

def python1_1_finish(request):
    user = request.user
    user.python1_1 = True
    user.save()
    return redirect('detail_python1')