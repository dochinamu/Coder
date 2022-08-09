from pickletools import pystring
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Attend, PyStepAttend

admin.site.register(User, UserAdmin)
admin.site.register(Attend)
admin.site.register(PyStepAttend)