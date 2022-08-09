from re import X
from time import time
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import get_user_model
from account_app.models import User, PyStepAttend
from .models import PythonChallenge1
from django.utils import timezone
import datetime
from datetime import date, timedelta, datetime
from django.contrib.auth.decorators import login_required

# 나의 챌린지 (진행 중인 챌린지)
@login_required(login_url='/account/login/')
def my_challenge(request):
    user = request.user
    # 파이썬 챌린지 1 참가 여부
    try:
        py1 = PythonChallenge1.objects.get(participant_id=user.id)
        py1_start = py1.start_date.strftime("%m월 %d일") 
        py1_finish = py1.finish_date.strftime("%m월 %d일") 
        return render(request, 'my_challenge.html', {'py1': py1, 'py1_start':py1_start, 'py1_finish':py1_finish})
    
    except:
        return render(request,'my_challenge.html')
        
# 나의 챌린지 (완료 목록)
@login_required(login_url='/account/login/')
def my_challenge_complete(request):
    user = request.user
    # 파이썬 챌린지 1 참가 & 진행 중 여부 
    try:
        py1 = PythonChallenge1.objects.get(participant_id=user.id)
        py1_start = py1.start_date.strftime("%m월 %d일") 
        py1_finish = py1.finish_date.strftime("%m월 %d일") 
        return render(request, 'my_challenge_complete.html', {'py1': py1, 'py1_start':py1_start, 'py1_finish':py1_finish})
    except:
        return render(request,'my_challenge_complete.html')



# 파이썬 챌린지1 소개 페이지 
# 챌린지에 대한 사용자의 참여 여부(join)를 함께 리턴 
@login_required(login_url='/account/login/')
def python1_explain(request):
    user = request.user 
    challenge = PythonChallenge1.objects.filter(participant_id=user.id)
    # 사용자가 이미 참여 중인 경우, challenge가 존재
    if challenge:
        join = True
    # 미참여 상태 
    else:
        join = False
    return render(request, 'python1_explain.html', {'join': join} )


# 파이썬 챌린지1 참여하기 + 챌린지 페이지 이동 
@login_required(login_url='/account/login/')
def python1_challenge(request):
    user = request.user
    challenge = PythonChallenge1.objects.filter(participant_id=user.id)
    # 사용자가 이미 참가 중인 경우, challenge가 존재
    # 오늘을 기준으로 그날 챌린지 진행도 확인 
    if challenge:
        start_date = challenge[0].start_date.strftime("%m월 %d일") 
        finish_date = challenge[0].finish_date.strftime("%m월 %d일") 
        today = date.today()
        
        # 오늘이 챌린지 기간에 포함된다면 
        if challenge[0].start_date <= today <= challenge[0].finish_date:
            # 시작일~오늘까지 challenge 데이터를 우선 1로 변경 
            x = (timedelta(days=7) - (challenge[0].finish_date - today)).days
            # 효율적인 코드 고민하기... 
            if x == 1: 
                challenge[0].day1 = 1
            if x == 2: 
                challenge[0].day1 = 1
                challenge[0].day2 = 1
            if x == 3: 
                challenge[0].day1 = 1
                challenge[0].day2 = 1
                challenge[0].day3 = 1
            if x == 4: 
                challenge[0].day1 = 1
                challenge[0].day2 = 1
                challenge[0].day3 = 1
                challenge[0].day4 = 1
            if x == 5: 
                challenge[0].day1 = 1
                challenge[0].day2 = 1
                challenge[0].day3 = 1
                challenge[0].day4 = 1
                challenge[0].day5 = 1
            if x == 6: 
                challenge[0].day1 = 1
                challenge[0].day2 = 1
                challenge[0].day3 = 1
                challenge[0].day4 = 1
                challenge[0].day5 = 1
                challenge[0].day6 = 1
            if x == 7: 
                challenge[0].day1 = 1
                challenge[0].day2 = 1
                challenge[0].day3 = 1
                challenge[0].day4 = 1
                challenge[0].day5 = 1
                challenge[0].day6 = 1
                challenge[0].day7 = 1

            # 챌린지 시작일 ~ 오늘까지 PyStepAttend 객체 가져오기 
            py_attends = PyStepAttend.objects.filter(attender = user, date__range=(challenge[0].start_date, today))
            
            # for문으로 py_attends 내 PyStepAttend 객체의 date값 따라 challenge 데이터를 2로 변경 
            for i in py_attends: 
                py_date = i.date
                n = (timedelta(days=7) - (challenge[0].finish_date - py_date)).days
                # 이 부분 좀 더 효율적인 코드 없을까 
                if n == 1:
                    challenge[0].day1 = 2
                if n == 2:
                    challenge[0].day2 = 2
                if n == 3:
                    challenge[0].day3 = 2
                if n == 4:
                    challenge[0].day4 = 2
                if n == 5:
                    challenge[0].day5 = 2
                if n == 6:
                    challenge[0].day6 = 2
                if n == 7:
                    challenge[0].day7 = 2
                    # 챌린지 성공
                    if (challenge[0].day1==2) and (challenge[0].day2==2) and (challenge[0].day3==2) and (challenge[0].day4==2) and (challenge[0].day5==2) and (challenge[0].day6==2) and (challenge[0].day7==2):
                        challenge[0].complete = True
                        challenge[0].save()
                        # 유저 챌린지 첫 성공 데이터 True로 변경 (뱃지용)
                        user.challenge_complete = True
                        user.save()
                challenge[0].save()
            
            # 작업 중 확인용 
            print(challenge[0].day1,challenge[0].day2,challenge[0].day3,challenge[0].day4,challenge[0].day5,challenge[0].day6,challenge[0].day7)
          
        
        # 오늘이 챌린지 종료일 다음날이라면, day1-day7 값에 따라 complete 변수 값을 수정한다   
        if today == challenge[0].finish_date + timedelta(days=1):
            # 챌린지 성공 
            if (challenge[0].day1==2) and (challenge[0].day2==2) and (challenge[0].day3==2) and (challenge[0].day4==2) and (challenge[0].day5==2) and (challenge[0].day6==2) and (challenge[0].day7==2):
                challenge[0].complete = True
                challenge[0].save()
                # 유저 챌린지 첫 성공 데이터 True로 변경 (뱃지용)
                user.challenge_complete = True
                user.save()
                
            # 챌린지 실패 
            else:
                challenge[0].delete()
                return redirect('home')

        return render(request, 'python1_challenge.html', {'challenge': challenge[0],'start_date': start_date, 'finish_date': finish_date} )
    
    # 사용자 미참가 상태
    # 참가시키기(객체 생성) + 챌린지 페이지로 이동 
    else:
        new_challenge = PythonChallenge1(participant = user) # 괄호 안에 다 넣어보기  
        new_challenge.start_date = date.today()
        new_challenge.finish_date = new_challenge.start_date + timedelta(days=6)
        new_challenge.save()
        # string으로 변환
        start_date = new_challenge.start_date.strftime("%m월 %d일") 
        finish_date = new_challenge.finish_date.strftime("%m월 %d일") 
        # 유저 챌린지 첫 참여 데이터 True로 변경 (뱃지용)
        user.challenge_join = True
        user.save()

        return render(request, 'python1_challenge.html', {'challenge': new_challenge, 'start_date': start_date, 'finish_date': finish_date} )





# def new_challenge(request):
#     if request.method == 'POST':
#         chal = Challenge()
#         chal.category = request.POST['category']
#         chal.title = request.POST['title']
#         chal.body = request.POST['body']
#         chal.save()
#         return redirect('home')
#     else:
#         return render(request, 'new_challenge.html')

# def my_challenge(request):
#     User = get_user_model()
#     user = get_object_or_404(User, username=request.user.username)

#     chals = user.challenges.all().distinct()
#     print(chals)

#     my_chal = {}
#     for chal in chals:
#         chal_user = ChallengeUsers.objects.filter(challenge=chal, user=user)
#         print(chal_user)
#         field_name = 'started_at'
#         start_date = getattr(chal_user, field_name)
#         fin_date = start_date + datetime.timedelta(13)
#         my_chal.update({'chal': chal, 'start': start_date, 'fin': fin_date})



# def python_challenge(request, chal_id):
#     py_chal = get_object_or_404(Challenge, pk=chal_id)
#     #py_chals = Challenge.objects.filter(category='python')
#     #py_chal = py_chals[chal_id-1]
#     #print(py_chal)

#     User = get_user_model()
#     user = get_object_or_404(User, username=request.user.username)

#     obj = get_object_or_404(ChallengeUsers, pk=chal_id)
#     print(obj)

#     objs = ChallengeUsers.objects.filter(challenge=py_chal, user=user)
#     try:
#         obj = objs[0]
#     except IndexError:
#         ChallengeUsers.objects.create(challenge=py_chal, user=user)
#         objs = ChallengeUsers.objects.filter(challenge=py_chal, user=user)
#         obj = objs[0]
#     field_name = 'started_at'
#     start_date = getattr(obj, field_name)
#     print(start_date.year)

#     days = {}
#     for x in range(14):
#         days.update({start_date + datetime.timedelta(x): ''})
# #    day1 = start_date
# #    day2 = start_date + datetime.timedelta(1)
# #    day3 = start_date + datetime.timedelta(2)
# #    day4 = start_date + datetime.timedelta(3)
# #    day5 = start_date + datetime.timedelta(4)
# #    day6 = start_date + datetime.timedelta(5)
# #    day7 = start_date + datetime.timedelta(6)
# #    day8 = start_date + datetime.timedelta(7)
# #    day9 = start_date + datetime.timedelta(8)
# #    day10 = start_date + datetime.timedelta(9)
# #    day11 = start_date + datetime.timedelta(10)
# #    day12 = start_date + datetime.timedelta(11)
# #    day13 = start_date + datetime.timedelta(12)
# #    day14 = start_date + datetime.timedelta(13)
#     fin_date = start_date + datetime.timedelta(13)
#     print(fin_date)

#     today = datetime.datetime.now()
#     tomorrow = today + datetime.timedelta(1)
# #    x = 1
# #    for x in range(14):
# #        if day > today:
# #            
# #        'day%x' % x 
#     for day in days:
#         if day > tomorrow:
#             days[day] = 'no_check'
#         else:
#             days[day] = 'attend'
# #        x += 1
#     print(days)

#     #py_chal1.participant.add(user)
#     #py_chal1.save()
#     #pars = py_chal.participant.all().distinct()
#     #chals = user.challenges.all().distinct()
#     #print(pars)
#     #print(chals)
#     #print(date)
#     #python_challenge1 = python_challenge.objects.get(pk=1)
#     return render(request, 'python_challenge.html', {'start_date': start_date, 'fin_date': fin_date, 'days': days, 'py_chal': py_chal})
#     #'days': [day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14]
#     #, 'pars': pars}

