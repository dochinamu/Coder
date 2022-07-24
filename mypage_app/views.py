from django.shortcuts import render, redirect
from account_app.models import User, Attend

# Create your views here.
def mypage(request):
    user = User.objects.get(username=request.user.username)
    mon = False
    tue = False
    wed = False
    thu = False
    fri = False
    sat = False
    sun = False
    python_clear = 0
    python_total = 4
    if user.python1_1 == True:
        python_clear += 1
    #python_total += 1
    if user.python1_2 == True:
        python_clear += 1
    #python_total += 1
    if user.python1_3 == True:
        python_clear += 1
    #python_total += 1
    if user.python1_4 == True:
        python_clear += 1
    #python_total += 1
    python_per = python_clear*100/python_total
    print(python_per)

    attend = Attend.objects.filter(attender=user)
    print(attend)
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
#    attend = Attend.objects.values()
#    #print(attend)
#    for obj in attend:
#        if obj['monday'] == True:
#            mon = True
#        if obj['tuesday'] == True:
#            tue = True
#        if obj['wednesday'] == True:
#            wed = True
#        if obj['thursday'] == True:
#            thu = True
#        if obj['friday'] == True:
#            fri = True
#        if obj['saturday'] == True:
#            sat = True
#        if obj['sunday'] == True:
#            sun = True
#    #queryset = Attend.objects.all()
#    #Monday_set = Attend.objects.filter(datetime__contains='2022-07-24')
#    
#    #attend = Attend.objects.filter()
#    #attend = Attend.objects.filter(attender=user)
#    attend = Attend.objects.filter(attender=user)
#    print(attend)
#    sunday = False
#    #queryset = attend.objects.all()
#    for obj in attend:
#        field_name = 'datetime'
#        date = getattr(obj, field_name)
#    #    if set.datetime.weekday() == 6:
#        if date.weekday() == 6:
#            print('Sunday')
#            obj.sunday = True
#            sunday = True
#    #        attend = Attend()
#    #        attend.sunday = True
#    #attend.save()
#    sun = False
#    attend = Attend.objects.values('sunday')
#    for obj in attend:
#        print(obj)
#        if obj['sunday'] == True:
#            sun = True
#    print(attend)
#    return render(request, 'mypage.html', {'sun':sun})

def create(request):
    user = User()
    if (request.method == 'POST' or request.method == 'FILES'):
#        user = get_object_or_404(User, pk=user.pk)
#        user = request.user()
        user = User.objects.get(username=request.user.username)
        user.profile_photo = request.FILES['upload']
        user.profile_message = request.POST['profile_message']
        user.save()
        return redirect('home')
    else:
        return render(request, 'create.html')

def update(request):
    user = User()
    if (request.method == 'POST' or request.method == 'FILES'):
        user = User.objects.get(username=request.user.username)
        user.profile_photo = request.FILES['upload']
        user.nickname = request.POST['nickname']
        user.profile_message = request.POST['profile_message']
        user.email = request.POST['email']
        user.phone_number = request.POST['phone_number']
        user.password = request.POST['password']
        user.save()
        return redirect('mypage')
    else:
        return render(request, 'update.html')