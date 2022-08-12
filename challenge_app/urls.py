from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', my_challenge, name="my_challenge"),
    path('complete/', my_challenge_complete, name="my_challenge_complete"),
    path('python1_explain/', python1_explain, name="python1_explain"),
    path('python1_challenge/', python1_challenge, name="python1_challenge"),

    path('pychal1_new/', pychal1_new, name="pychal1_new"),
    path('pychal1_detail/<int:blog_id>/', pychal1_detail, name="pychal1_detail"),
    path('pychal1_edit/<int:blog_id>/', pychal1_edit, name="pychal1_edit"),
    path('pychal1_del/<int:blog_id>/', pychal1_del, name="pychal1_del"),
#
    path('pychal1_comment/<int:blog_id>/', pychal1_comment, name="pychal1_comment"),
#    path('edit_comment', edit_comment, name="edit_comment"),
    path('pychal1_del_comment/<int:comment_id>/', pychal1_del_comment, name="pychal1_del_comment"),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)