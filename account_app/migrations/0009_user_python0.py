# Generated by Django 4.0.6 on 2022-07-25 00:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account_app', '0008_merge_20220724_2359'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='python0',
            field=models.BooleanField(default=False),
        ),
    ]
