# Generated by Django 2.1.2 on 2018-11-11 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_sensor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sensor',
            name='name',
            field=models.CharField(max_length=15),
        ),
    ]