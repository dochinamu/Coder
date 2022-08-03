from django.shortcuts import render, redirect, get_object_or_404
from account_app.models import User, Attend
from challenge_app.models import Challenge
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.decorators import login_required
from django.http import Http404
import datetime

def home(request):
    py_chals = Challenge.objects.filter(category='python')

    try:
        User = get_user_model()
        user = get_object_or_404(User, username=request.user.username)
        #User = get_user_model()
        #user = get_object_or_404(User, pk=user_id)
        #user = User.objects.get(username=request.user.username)

        date = datetime.date.today()
        weekday = date.weekday()
        tomorrow = date + datetime.timedelta(1)
        start_week = date - datetime.timedelta(weekday)
        print(start_week)

        # Get attend queryset with filter
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
        return render(request, 'home.html', {'weekdays': weekdays, 'py_chals': py_chals})
    except Http404:
        return render(request, 'home.html')