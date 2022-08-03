from django.urls import path
from .views import *

urlpatterns = [
    path('new_challenge', new_challenge, name="new_challenge"),
    path('my_challenge', my_challenge, name="my_challenge"),
    path('python_explain/<int:chal_id>', python_explain, name="python_explain"),
    path('python_challenge/<int:chal_id>/', python_challenge, name="python_challenge"),
]