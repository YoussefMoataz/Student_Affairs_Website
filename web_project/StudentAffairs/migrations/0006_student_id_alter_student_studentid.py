# Generated by Django 4.2 on 2023-05-13 07:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentAffairs', '0005_alter_student_studentstatus'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='id',
            field=models.BigAutoField(auto_created=True, default=20230001, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='student',
            name='studentID',
            field=models.CharField(max_length=8),
        ),
    ]
