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
        mon = False
        tue = False
        wed = False
        thu = False
        fri = False
        sat = False
        sun = False
        date = datetime.date.today()
        start_week = date - datetime.timedelta(date.weekday())
        end_week = start_week + datetime.timedelta(7)
        print(start_week)
        print(end_week)

        # Get attend queryset with filter
        attend = Attend.objects.filter(attender=user, datetime__gte=start_week, datetime__lte=end_week)
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
        return render(request, 'home.html', {'mon':mon, 'tue':tue, 'wed':wed, 'thu':thu, 'fri':fri, 'sat':sat, 'sun':sun})
    except Http404:
        return render(request, 'home.html')