from django.contrib import admin
from account_app.models import User
from .models import PythonChallenge1, PyChal1_Blog, PyChal1_Comment

admin.site.register(PythonChallenge1)
admin.site.register(PyChal1_Blog)
admin.site.register(PyChal1_Comment)