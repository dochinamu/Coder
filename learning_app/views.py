from django.shortcuts import render,redirect
from account_app.models import User, PyStepAttend
from django.contrib.auth.decorators import login_required

# Create your views here.
def learning(request):
    return render(request, 'learning_python.html')

def detail_python1(request):
    return render(request, 'detail_python1.html')

@login_required(login_url='/account/login/')
def python1_1(request):
    return render(request, 'index.html')

@login_required(login_url='/account/login/')
def python1_1_complete(request):
    return render(request, 'complete.html')

@login_required(login_url='/account/login/')
def python1_1_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python1_1 = True
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    python1_1_object = PyStepAttend(attender=request.user)
    python1_1_object.save()
    # print(python1_1_object) 확인용 
    return redirect('detail_python1')