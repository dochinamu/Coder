from django.urls import path
from .views import *

urlpatterns = [
   path('', learning, name="learning"),
   path('python1', detail_python1, name="detail_python1"),
   path('python1/python1_1', python1_1, name="python1_1"),
   path('python1/complete.html', python1_1_complete, name="python1_1_complete"),
   path('python1/python1_1/finish', python1_1_finish, name="python1_1_finish"),

]