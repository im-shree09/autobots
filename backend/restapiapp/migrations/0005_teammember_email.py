# Generated by Django 4.1.4 on 2022-12-31 16:35

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('restapiapp', '0004_teammember_team_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='teammember',
            name='email',
            field=models.EmailField(default=django.utils.timezone.now, max_length=254),
            preserve_default=False,
        ),
    ]
