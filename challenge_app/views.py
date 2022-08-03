from re import X
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import get_user_model
from account_app.models import User
from .models import Challenge, ChallengeUsers
import datetime

# Create your views here.
def new_challenge(request):
    if request.method == 'POST':
        chal = Challenge()
        chal.category = request.POST['category']
        chal.title = request.POST['title']
        chal.body = request.POST['body']
        chal.save()
        return redirect('home')
    else:
        return render(request, 'new_challenge.html')

def my_challenge(request):
    User = get_user_model()
    user = get_object_or_404(User, username=request.user.username)

    chals = user.challenges.all().distinct()
    print(chals)

    my_chal = {}
    for chal in chals:
        chal_user = ChallengeUsers.objects.filter(challenge=chal, user=user)
        print(chal_user)
        field_name = 'started_at'
        start_date = getattr(chal_user, field_name)
        fin_date = start_date + datetime.timedelta(13)
        my_chal.update({'chal': chal, 'start': start_date, 'fin': fin_date})

    #field_name = 'started_at'
    #start_date = getattr(obj, field_name)
    #print(start_date.year)
    return render(request, 'my_challenge.html', {'my_chal': my_chal})

def python_explain(request, chal_id):
    #py_chal = Challenge.objects.filter(category='python', pk=chal_id)
    py_chal = get_object_or_404(Challenge, pk=chal_id)
    #print(py_chals)
    #py_chal_num = py_chals.index()
    #py_chal = py_chals[chal_id-1]
    print(py_chal)

    User = get_user_model()
    user = get_object_or_404(User, username=request.user.username)

    pars = py_chal.participant.all().distinct()
    print(pars)

    #pars = py_chal.participant.all().distinct()
    #chals = user.challenges.all().distinct()
    #print(pars)
    #print(chals)
    return render(request, 'python_explain.html', {'py_chal': py_chal, 'pars': pars})
    #{'py_chal': py_chal, 'pars': pars}

def python_challenge(request, chal_id):
    py_chal = get_object_or_404(Challenge, pk=chal_id)
    #py_chals = Challenge.objects.filter(category='python')
    #py_chal = py_chals[chal_id-1]
    #print(py_chal)

    User = get_user_model()
    user = get_object_or_404(User, username=request.user.username)

    obj = get_object_or_404(ChallengeUsers, pk=chal_id)
    print(obj)

    objs = ChallengeUsers.objects.filter(challenge=py_chal, user=user)
    try:
        obj = objs[0]
    except IndexError:
        ChallengeUsers.objects.create(challenge=py_chal, user=user)
        objs = ChallengeUsers.objects.filter(challenge=py_chal, user=user)
        obj = objs[0]
    field_name = 'started_at'
    start_date = getattr(obj, field_name)
    print(start_date.year)

    days = {}
    for x in range(14):
        days.update({start_date + datetime.timedelta(x): ''})
#    day1 = start_date
#    day2 = start_date + datetime.timedelta(1)
#    day3 = start_date + datetime.timedelta(2)
#    day4 = start_date + datetime.timedelta(3)
#    day5 = start_date + datetime.timedelta(4)
#    day6 = start_date + datetime.timedelta(5)
#    day7 = start_date + datetime.timedelta(6)
#    day8 = start_date + datetime.timedelta(7)
#    day9 = start_date + datetime.timedelta(8)
#    day10 = start_date + datetime.timedelta(9)
#    day11 = start_date + datetime.timedelta(10)
#    day12 = start_date + datetime.timedelta(11)
#    day13 = start_date + datetime.timedelta(12)
#    day14 = start_date + datetime.timedelta(13)
    fin_date = start_date + datetime.timedelta(13)
    print(fin_date)

    today = datetime.datetime.now()
    tomorrow = today + datetime.timedelta(1)
#    x = 1
#    for x in range(14):
#        if day > today:
#            
#        'day%x' % x 
    for day in days:
        if day > tomorrow:
            days[day] = 'no_check'
        else:
            days[day] = 'attend'
#        x += 1
    print(days)

    #py_chal1.participant.add(user)
    #py_chal1.save()
    #pars = py_chal.participant.all().distinct()
    #chals = user.challenges.all().distinct()
    #print(pars)
    #print(chals)
    #print(date)
    #python_challenge1 = python_challenge.objects.get(pk=1)
    return render(request, 'python_challenge.html', {'start_date': start_date, 'fin_date': fin_date, 'days': days, 'py_chal': py_chal})
    #'days': [day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14]
    #, 'pars': pars}