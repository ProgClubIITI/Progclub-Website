# Generated by Django 4.1.7 on 2024-01-29 12:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0003_project_created_on"),
    ]

    operations = [
        migrations.AlterField(
            model_name="project",
            name="created_on",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2024, 1, 29, 18, 6, 27, 339069),
                null=True,
            ),
        ),
    ]