from django.db import models
from account_app.models import User


# 매일 파이썬 학습하기 챌린지(7일간 연속 학습)에 대한 모델 
# 어떤 유저가 챌린지에 참여하면, 해당 유저를 participant로 갖는 PythonChallenge1 객체를 1개 생성한다 
# 즉 이 챌린지의 참여자가 10명이면 PythonChallenge1 객체가 10개 생기고, 
# 각 객체는 사용자 1명의 챌린지 이수 여부 등의 정보를 저장한다 

class PythonChallenge1(models.Model):
    participant = models.ForeignKey(User, on_delete=models.CASCADE)
    # PythonChallenge1에 따른 챌린지 이름은 다 같을테니까 default로 값을 준다 
    # title을 따로 활용할 일은 없을 것 같다 혹시 몰라서 정의해둠 
    title = models.CharField(default="매일 파이썬 학습하기", max_length=200)
    # 시작 날짜 (day1) 
    start_date = models.DateField(editable=True, auto_now_add=True, null = True)
    # 마지막 날짜 (day7)
    finish_date = models.DateField(editable=True, null = True)
    # 챌린지 완료 여부 
    complete = models.BooleanField(default=False)
    # day1-day7까지 각각에 대한 완료 여부
    # 0: 아직 오지 않은 날 (unchecked)
    # 1: 학습하지 않음 (x)
    # 2: 학습함 (o) 
    day1 = models.IntegerField(default=0)
    day2 = models.IntegerField(default=0)
    day3 = models.IntegerField(default=0)
    day4 = models.IntegerField(default=0)
    day5 = models.IntegerField(default=0)
    day6 = models.IntegerField(default=0)
    day7 = models.IntegerField(default=0)