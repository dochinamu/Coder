from django.shortcuts import render,redirect
from account_app.models import User, PyStepAttend
from django.contrib.auth.decorators import login_required

# 언어별 페이지
def learning(request):
    return render(request, 'learning_python.html')

def learning_html(request):
    return render(request, 'learning_HTML.html')

def learning_css(request):
    return render(request, 'learning_CSS.html')

def learning_java(request):
    return render(request, 'learning_Java.html')

# 파이썬 커리 
def detail_python1(request):
    return render(request, 'detail_python1.html')

def detail_python2(request):
    return render(request, 'detail_python2.html')

def detail_python3(request):
    return render(request, 'detail_python3.html')    

# 파이썬 1-1
@login_required(login_url='/account/login/')
def python1_1(request):
    return render(request, 'python1_1.html')

@login_required(login_url='/account/login/')
def python1_1_complete(request):
    return render(request, 'complete_p1_1.html')

@login_required(login_url='/account/login/')
def python1_1_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python1_1 = True
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    python1_1_object = PyStepAttend(attender=request.user)
    python1_1_object.save()
    return redirect('detail_python1')

# 파이썬 1-2
@login_required(login_url='/account/login/')
def python1_2(request):
    return render(request, 'python1_2.html')

@login_required(login_url='/account/login/')
def python1_2_complete(request):
    return render(request, 'complete_p1_2.html')

@login_required(login_url='/account/login/')
def python1_2_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python1_2 = True
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    object = PyStepAttend(attender=request.user)
    object.save()
    return redirect('detail_python1')

# 파이썬 1-3
@login_required(login_url='/account/login/')
def python1_3(request):
    return render(request, 'python1_3.html')

@login_required(login_url='/account/login/')
def python1_3_complete(request):
    return render(request, 'complete_p1_3.html')

@login_required(login_url='/account/login/')
def python1_3_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python1_3 = True
    if (user.python1_1==True) and (user.python1_2==True) and (user.python1_3==True):
        user.python1=True  
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    object = PyStepAttend(attender=request.user)
    object.save()
    return redirect('detail_python1')

# 파이썬 2-1
@login_required(login_url='/account/login/')
def python2_1(request):
    return render(request, 'python2_1.html')

@login_required(login_url='/account/login/')
def python2_1_complete(request):
    return render(request, 'complete_p2_1.html')

@login_required(login_url='/account/login/')
def python2_1_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python2_1 = True
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    object = PyStepAttend(attender=request.user)
    object.save()
    return redirect('detail_python2')

# 파이썬 2-2
@login_required(login_url='/account/login/')
def python2_2(request):
    return render(request, 'python2_2.html')

@login_required(login_url='/account/login/')
def python2_2_complete(request):
    return render(request, 'complete_p2_2.html')

@login_required(login_url='/account/login/')
def python2_2_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python2_2 = True
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    object = PyStepAttend(attender=request.user)
    object.save()
    return redirect('detail_python2')

# 파이썬 2-3
@login_required(login_url='/account/login/')
def python2_3(request):
    return render(request, 'python2_3.html')

@login_required(login_url='/account/login/')
def python2_3_complete(request):
    return render(request, 'complete_p2_3.html')

@login_required(login_url='/account/login/')
def python2_3_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python2_3 = True
    if (user.python2_1==True) and (user.python2_2==True) and (user.python2_3==True):
        user.python2=True  
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    object = PyStepAttend(attender=request.user)
    object.save()
    return redirect('detail_python2')

# 파이썬 3-1
@login_required(login_url='/account/login/')
def python3_1(request):
    return render(request, 'python3_1.html')

@login_required(login_url='/account/login/')
def python3_1_complete(request):
    return render(request, 'complete_p3_1.html')

@login_required(login_url='/account/login/')
def python3_1_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python3_1 = True
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    object = PyStepAttend(attender=request.user)
    object.save()
    return redirect('detail_python3')

# 파이썬 3-2
@login_required(login_url='/account/login/')
def python3_2(request):
    return render(request, 'python3_2.html')

@login_required(login_url='/account/login/')
def python3_2_complete(request):
    return render(request, 'complete_p3_2.html')

@login_required(login_url='/account/login/')
def python3_2_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python3_2 = True
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    object = PyStepAttend(attender=request.user)
    object.save()
    return redirect('detail_python3')

# 파이썬 3-3
@login_required(login_url='/account/login/')
def python3_3(request):
    return render(request, 'python3_3.html')

@login_required(login_url='/account/login/')
def python3_3_complete(request):
    return render(request, 'complete_p3_3.html')

@login_required(login_url='/account/login/')
def python3_3_finish(request):
    user = request.user
    # 사용자 데이터 변경
    user.python3_3 = True
    if (user.python3_1==True) and (user.python3_2==True) and (user.python3_3==True):
        user.python3=True  
    user.save()
    # PyStepAttend 객체 생성 (완료 날짜 기록)
    object = PyStepAttend(attender=request.user)
    object.save()
    return redirect('detail_python3')