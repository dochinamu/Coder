from django.shortcuts import render
from account_app.models import User

# Create your views here.
def learning(request):
    return render(request, 'learning.html')

def learning_python(request):
    user = User()
    return render(request, 'learning_python.html')

def detail_python1(request):
    return render(request, 'detail_python1.html')