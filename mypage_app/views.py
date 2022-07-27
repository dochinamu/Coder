from django.shortcuts import render, redirect, get_object_or_404
from account_app.models import User, Attend
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
#from django_q.tasks import schedule
import datetime
  
@login_required(login_url='/account/login/')
def mypage(request, user_id):
    # Get user
    User = get_user_model()
    user = get_object_or_404(User, pk=user_id)
    # Set variable
    mon = False
    tue = False
    wed = False
    thu = False
    fri = False
    sat = False
    sun = False
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
    if user.python1_4 == True:
        python_clear += 1
    python_total += 1
    print(python_clear)
    print(python_total)
    python_per = python_clear*100/python_total

    # Record this week
    date = datetime.date.today()
    start_week = date - datetime.timedelta(date.weekday())
    end_week = start_week + datetime.timedelta(7)
    print(start_week)
    print(end_week)

    # Get attend queryset with filter
    attend = Attend.objects.filter(attender=user, datetime__gte=start_week, datetime__lte=end_week)
    print(attend)

    # Change weekday variable to true
    for obj in attend:
        field_name = 'datetime'
        date = getattr(obj, field_name)
        if date.weekday() == 0:
            mon = True
        if date.weekday() == 1:
            tue = True
        if date.weekday() == 2:
            wed = True
        if date.weekday() == 3:
            thu = True
        if date.weekday() == 4:
            fri = True
        if date.weekday() == 5:
            sat = True
        if date.weekday() == 6:
            sun = True
    return render(request, 'mypage.html', {'mon':mon, 'tue':tue, 'wed':wed, 'thu':thu, 'fri':fri, 'sat':sat, 'sun':sun, 'python_per':python_per})

#user = User.objects.get(username=request.user.username)
#now = datetime.datetime.now()
#    if now.hour == 0:
#        attend.clear()

#def job():
#    print("I am working...")

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
