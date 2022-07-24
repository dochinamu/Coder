from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required

@login_required(login_url='/account/login/')
def mypage(request, user_id):
   User = get_user_model()
   user = get_object_or_404(User, pk=user_id)
   return render(request, 'mypage.html', {'user': user})    
    

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

