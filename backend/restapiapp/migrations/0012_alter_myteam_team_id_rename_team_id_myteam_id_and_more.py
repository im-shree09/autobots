# Generated by Django 4.1.4 on 2023-01-09 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapiapp', '0011_alter_myproject_proj_id_rename_proj_id_myproject_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myteam',
            name='team_id',
            field=models.AutoField(db_column='team_id', primary_key=True, serialize=False),
        ),
        migrations.RenameField(
            model_name='myteam',
            old_name='team_id',
            new_name='id',
        ),
        migrations.AlterField(
            model_name='myteammember',
            name='team_member_id',
            field=models.AutoField(db_column='team_member_id', primary_key=True, serialize=False),
        ),
        migrations.RenameField(
            model_name='myteammember',
            old_name='team_member_id',
            new_name='id',
        ),
    ]
