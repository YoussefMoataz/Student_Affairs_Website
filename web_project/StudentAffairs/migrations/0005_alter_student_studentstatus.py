# Generated by Django 4.2 on 2023-05-13 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentAffairs', '0004_alter_student_studentbirthdate_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='studentStatus',
            field=models.CharField(default='False', max_length=1),
        ),
    ]
