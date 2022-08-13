from django.urls import path
from .views import *

urlpatterns = [
   path('', learning, name="learning"),
   path('learning_html', learning_html, name="learning_html"),
   path('learning_css', learning_css, name="learning_css"),
   path('learning_java', learning_java, name="learning_java"),


   path('python1', detail_python1, name="detail_python1"),
   path('python2', detail_python2, name="detail_python2"),
   path('python3', detail_python3, name="detail_python3"),


   path('python1/python1_1', python1_1, name="python1_1"),
   path('python1/complete_p1_1.html', python1_1_complete, name="python1_1_complete"),
   path('python1/python1_1/finish', python1_1_finish, name="python1_1_finish"),
   
   path('python1/python1_2', python1_2, name="python1_2"),
   path('python1/complete_p1_2.html', python1_2_complete, name="python1_2_complete"),
   path('python1/python1_2/finish', python1_2_finish, name="python1_2_finish"),

   path('python1/python1_3', python1_3, name="python1_3"),
   path('python1/complete_p1_3.html', python1_3_complete, name="python1_3_complete"),
   path('python1/python1_3/finish', python1_3_finish, name="python1_3_finish"),

   # 파이썬 커리2
   path('python2/python2_1', python2_1, name="python2_1"),
   path('python2/complete_p2_1.html', python2_1_complete, name="python2_1_complete"),
   path('python2/python2_1/finish', python2_1_finish, name="python2_1_finish"),
   
   path('python2/python2_2', python2_2, name="python2_2"),
   path('python2/complete_p2_2.html', python2_2_complete, name="python2_2_complete"),
   path('python2/python2_2/finish', python2_2_finish, name="python2_2_finish"),

   path('python2/python2_3', python2_3, name="python2_3"),
   path('python2/complete_p2_3.html', python2_3_complete, name="python2_3_complete"),
   path('python2/python2_3/finish', python2_3_finish, name="python2_3_finish"),

   # 파이썬 커리3
   path('python3/python3_1', python3_1, name="python3_1"),
   path('python3/complete_p3_1.html', python3_1_complete, name="python3_1_complete"),
   path('python3/python3_1/finish', python3_1_finish, name="python3_1_finish"),
   
   path('python3/python3_2', python3_2, name="python3_2"),
   path('python3/complete_p3_2.html', python3_2_complete, name="python3_2_complete"),
   path('python3/python3_2/finish', python3_2_finish, name="python3_2_finish"),

   path('python3/python3_3', python3_3, name="python3_3"),
   path('python3/complete_p3_3.html', python3_3_complete, name="python3_3_complete"),
   path('python3/python3_3/finish', python3_3_finish, name="python3_3_finish"),
   
]