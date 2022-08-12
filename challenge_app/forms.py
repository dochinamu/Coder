from django import forms
from .models import PyChal1_Comment

class PyChal1_CommentForm(forms.ModelForm):
    class Meta:
        model = PyChal1_Comment
        fields = ['content']