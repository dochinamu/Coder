from django.urls import path
from .views import *

urlpatterns = [
   path('<int:user_id>/', mypage, name="mypage"),
   path('update/', update_mypage, name="update_mypage"),
   path('badge/', badge, name="badge"),
]