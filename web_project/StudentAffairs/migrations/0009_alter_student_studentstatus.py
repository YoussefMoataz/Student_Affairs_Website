# Generated by Django 4.2 on 2023-05-13 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentAffairs', '0008_alter_student_studentstatus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='studentStatus',
            field=models.CharField(max_length=8, null=True),
        ),
    ]
