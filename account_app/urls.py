from django.urls import path
from .views import *

urlpatterns = [
   path('', account, name="account"),
   path('signup/',signup, name="signup"),
   path('login/',login, name="login"),
   path('logout/',logout, name="logout"),
   path('account_delete/',account_delete, name="account_delete"),
   path('account_policy/',account_policy, name="account_policy"),
   
]