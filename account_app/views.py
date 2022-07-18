from django.shortcuts import render
from .models import User

# Create your views here.
def account(request):
    return render(request, 'account.html')