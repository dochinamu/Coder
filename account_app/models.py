from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=20, default='', blank=True, null=True)
    nickname = models.CharField(max_length=20, blank=False, null=False)
    phone_number = models.CharField(max_length=20, blank=False)
    profile_photo = models.ImageField(upload_to="profile_photo", blank=True, null=True)
    profile_message = models.TextField(max_length=200, default='', blank=True, null=True)
    python0 = models.BooleanField(default=False)
    python1 = models.BooleanField(default=False)
    python2 = models.BooleanField(default=False)
    python3 = models.BooleanField(default=False)
    python1_1 = models.BooleanField(default=False)
    python1_2 = models.BooleanField(default=False)
    python1_3 = models.BooleanField(default=False)
    python1_4 = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name