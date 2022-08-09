from django.urls import path
from .views import *

urlpatterns = [
    path('', my_challenge, name="my_challenge"),
    path('complete/', my_challenge_complete, name="my_challenge_complete"),
    path('python1_explain/', python1_explain, name="python1_explain"),
    path('python1_challenge/', python1_challenge, name="python1_challenge"),
]