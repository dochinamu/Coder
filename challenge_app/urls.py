from django.urls import path
from .views import *

urlpatterns = [
    path('python_challenge', python_challenge, name="python_challenge"),
    path('python_challenge1', python_challenge1, name="python_challenge1"),
]