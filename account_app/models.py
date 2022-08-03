from django.db import models
from django.contrib.auth.models import User, AbstractUser
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
    python4 = models.BooleanField(default=False)
    python1_1 = models.BooleanField(default=False)
    python1_2 = models.BooleanField(default=False)
    python1_3 = models.BooleanField(default=False)
    python1_4 = models.BooleanField(default=False)

class Attend(models.Model):
    attender = models.ForeignKey(User, on_delete=models.CASCADE)
    datetime = models.DateTimeField(auto_now_add=True)
    monday = models.BooleanField(default=False)
    tuesday = models.BooleanField(default=False)
    wednesday = models.BooleanField(default=False)
    thursday = models.BooleanField(default=False)
    friday = models.BooleanField(default=False)
    saturday = models.BooleanField(default=False)
    sunday = models.BooleanField(default=False)

    def __str__(self):
        return str(str(self.attender.username + " " + str(self.datetime) + " " + str(self.datetime.weekday())))

class PyStepAttend(models.Model):
    attender = models.ForeignKey(User, on_delete=models.CASCADE)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.attender.username + " " + str(self.datetime))