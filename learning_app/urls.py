from django.urls import path
from .views import *

urlpatterns = [
   path('', learning, name="learning"),
   path('python', learning_python, name="learning_python"),
   path('detail/python1', detail_python1, name="detail_python1"),
]