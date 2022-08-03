from django.db import models
from account_app.models import User

# Create your models here.
class Challenge(models.Model):
    category = models.CharField(max_length=15, default='')
    title = models.CharField(max_length=30)
    body = models.TextField()
    #started_at = models.DateTimeField(auto_now_add=True)
    participant = models.ManyToManyField(User, through="ChallengeUsers")
    
    def __str__(self):
        return self.title

class ChallengeUsers(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    participant = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    started_at = models.DateTimeField(auto_now_add=True)