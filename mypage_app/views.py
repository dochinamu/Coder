from django.shortcuts import render, redirect, get_object_or_404
from account_app.models import User, Attend
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
#from django_q.tasks import schedule
import datetime
from django.views.decorators.csrf import csrf_exempt



  
@login_required(login_url='/account/login/')
def mypage(request, user_id):
    # Get user
    User = get_user_model()
    user = get_object_or_404(User, username=request.user.username)
    # Set variable
    python_clear = 0
    python_total = 0

    # Calculate cleared percentage
    if user.python1_1 == True:
        python_clear += 1
    python_total += 1
    if user.python1_2 == True:
        python_clear += 1
    python_total += 1
    if user.python1_3 == True:
        python_clear += 1
    python_total += 1
    if user.python2_1 == True:
        python_clear += 1
    python_total += 1
    if user.python2_2 == True:
        python_clear += 1
    python_total += 1
    if user.python2_3 == True:
        python_clear += 1
    python_total += 1
    if user.python3_1 == True:
        python_clear += 1
    python_total += 1
    if user.python3_2 == True:
        python_clear += 1
    python_total += 1
    if user.python3_3 == True:
        python_clear += 1
    python_total += 1
    print(python_clear)
    print(python_total)
    python_per = round(python_clear*100/python_total, 1)

    # Record this week
    date = datetime.date.today()
    weekday = date.weekday()
    tomorrow = date + datetime.timedelta(1)
    start_week = date - datetime.timedelta(weekday)
    print(start_week)
    attend = Attend.objects.filter(attender=user, datetime__gte=start_week, datetime__lte=tomorrow)
    print(attend)
    weekdays = {'월': '', '화': '', '수': '', '목': '', '금': '', '토': '', '일': ''}
    print(weekdays.values)
    if weekday <= 5:
        weekdays['일'] = 'no_check'
    if weekday <= 4:
        weekdays['토'] = 'no_check'
    if weekday <= 3:
        weekdays['금'] = 'no_check'
    if weekday <= 2:
        weekdays['목'] = 'no_check'
    if weekday <= 1:
        weekdays['수'] = 'no_check'
    if weekday <= 0:
        weekdays['화'] = 'no_check'

    for obj in attend:
        field_name = 'datetime'
        date = getattr(obj, field_name)
        if date.weekday() == 0:
            weekdays['월'] = 'attend'
        if date.weekday() == 1:
            weekdays['화'] = 'attend'
        if date.weekday() == 2:
            weekdays['수'] = 'attend'
        if date.weekday() == 3:
            weekdays['목'] = 'attend'
        if date.weekday() == 4:
            weekdays['금'] = 'attend'
        if date.weekday() == 5:
            weekdays['토'] = 'attend'
        if date.weekday() == 6:
            weekdays['일'] = 'attend'

    return render(request, 'mypage.html', {'weekdays': weekdays, 'python_per':python_per})


@csrf_exempt
@login_required(login_url='/account/login/')
def update_mypage(request):
    user = request.user
    if request.method == 'POST' or request.method == 'FILES':
        user.name = request.POST['name']
        user.nickname = request.POST['nickname']
        user.profile_message = request.POST['profile_message']
        user.email = request.POST['email']
        user.phone_number = request.POST['phone_number']
        try:
            user.profile_photo = request.FILES['image']
            user.save()
        except:
            user.save()
        return redirect('mypage', user.id)
    else:
        return render(request, 'update_mypage.html', {'user': user})

@login_required(login_url='/account/login/')
def badge(request):
    user = request.user
    return render(request, 'badge.html', {'user': user})
