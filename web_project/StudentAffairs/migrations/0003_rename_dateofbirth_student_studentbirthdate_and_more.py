# Generated by Django 4.2 on 2023-05-13 07:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('StudentAffairs', '0002_alter_student_gender'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='dateOfBirth',
            new_name='studentBirthDate',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='department',
            new_name='studentDepartment',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='email',
            new_name='studentEmail',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='gpa',
            new_name='studentGPA',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='gender',
            new_name='studentGender',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='id',
            new_name='studentID',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='level',
            new_name='studentLevel',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='name',
            new_name='studentName',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='phone',
            new_name='studentPhone',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='status',
            new_name='studentStatus',
        ),
    ]
