# Generated by Django 4.0.6 on 2022-07-30 17:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('challenge_app', '0004_challenge_num'),
    ]

    operations = [
        migrations.RenameField(
            model_name='challengeusers',
            old_name='participant',
            new_name='challenge',
        ),
    ]