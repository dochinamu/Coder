# Generated by Django 4.0.6 on 2022-07-24 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account_app', '0002_alter_user_python1_3_alter_user_python2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='python1_3',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='python2',
            field=models.BooleanField(default=False),
        ),
    ]
