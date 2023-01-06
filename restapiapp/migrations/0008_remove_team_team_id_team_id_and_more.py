# Generated by Django 4.1.4 on 2023-01-06 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapiapp', '0007_remove_team_id_team_team_id_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='team_id',
        ),
        migrations.AddField(
            model_name='team',
            name='id',
            field=models.BigAutoField(auto_created=True, default=1212, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='teammember',
            name='team_name',
            field=models.CharField(max_length=50),
        ),
    ]