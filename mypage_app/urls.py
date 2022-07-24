from django.urls import path
from .views import *

urlpatterns = [
   path('', mypage, name="mypage"),
   path('create', create, name="create"),
   path('update', update, name="update"),
]