# Generated by Django 4.2 on 2023-05-13 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentAffairs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='gender',
            field=models.IntegerField(),
        ),
    ]
