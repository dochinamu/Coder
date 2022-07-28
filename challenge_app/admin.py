from django.contrib import admin
from account_app.models import User
from .models import Challenge

# Register your models here.
admin.site.register(Challenge)