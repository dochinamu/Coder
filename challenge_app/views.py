from django.shortcuts import render

# Create your views here.
def python_challenge(request):
    return render(request, 'python_challenge.html')
    
def python_challenge1(request):
    return render(request, 'python_challenge1.html')