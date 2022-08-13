from django.shortcuts import render,redirect
from django.contrib import auth
#from django.contrib.auth.models import User
from .models import User, Attend
from django.views.decorators.csrf import csrf_exempt




# Create your views here.
def account(request):
    return render(request, 'account.html')

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        if request.POST['password'] == request.POST['repeat']:
            # 회원가입 
            new_user = User.objects.create_user(username=request.POST['username'], password=request.POST['password'], 
            name=request.POST['name'], nickname=request.POST['nickname'], email=request.POST['email'], phone_number=request.POST['phone_number'])
            # 로그인
            #auth.login(request, new_user)
            # 홈 리다이렉션
            return render(request, 'account.html')
        else:
            return render(request, 'resignup.html')
    # GET 요청
    return render(request, 'signup.html') 

@csrf_exempt
def login(request):
    # POST 요청
    if request.method == 'POST':
        userid = request.POST['username']
        userpw = request.POST['password']
        user = auth.authenticate(request, username=userid, password=userpw)

        if user is not None:
            auth.login(request, user)
            attend_object = Attend(attender=request.user)
            attend_object.save()
            return redirect('home')
        else:
            return render(request,'relogin.html')
    
    # GET 요청
    else:
        return render(request, 'account.html')

def logout(request):
    auth.logout(request)
    return redirect('home') 

def account_delete(request):
    if request.user.is_authenticated:
        request.user.delete()
        auth.logout(request) 
    return redirect('home')
    
def account_policy(request):
    return render(request, 'account_policy.html')
