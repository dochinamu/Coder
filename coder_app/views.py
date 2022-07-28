from django.shortcuts import render, redirect, get_object_or_404
from account_app.models import User, Attend
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.decorators import login_required
from django.http import Http404
import datetime

def home(request):
    #User = get_user_model()
    #user = get_object_or_404(User, pk=user_id)
    #user = User.objects.get(username=request.user.username)
    try:
        User = get_user_model()
        user = get_object_or_404(User, username=request.user.username)
        mon = ''
        tue = ''
        wed = ''
        thu = ''
        fri = ''
        sat = ''
        sun = ''
        date = datetime.date.today()
        weekday = date.weekday()
        tomorrow = date + datetime.timedelta(1)
        start_week = date - datetime.timedelta(weekday)
        print(start_week)

        # Get attend queryset with filter
        attend = Attend.objects.filter(attender=user, datetime__gte=start_week, datetime__lte=tomorrow)
        print(attend)
        if weekday <= 5:
            sun = 'no_check'
        if weekday <= 4:
            sat = 'no_check'
        if weekday <= 3:
            fri = 'no_check'
        if weekday <= 2:
            thu = 'no_check'
        if weekday <= 1:
            wed = 'no_check'
        if weekday <= 0:
            tue = 'no_check'
        for obj in attend:
            field_name = 'datetime'
            date = getattr(obj, field_name)
            if date.weekday() == 0:
                mon = 'attend'
            if date.weekday() == 1:
                tue = 'attend'
            if date.weekday() == 2:
                wed = 'attend'
            if date.weekday() == 3:
                thu = 'attend'
            if date.weekday() == 4:
                fri = 'attend'
            if date.weekday() == 5:
                sat = 'attend'
            if date.weekday() == 6:
                sun = 'attend'
        return render(request, 'home.html', {'mon':mon, 'tue':tue, 'wed':wed, 'thu':thu, 'fri':fri, 'sat':sat, 'sun':sun})
    except Http404:
        return render(request, 'home.html')