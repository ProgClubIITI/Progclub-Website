# Generated by Django 4.1.7 on 2024-01-30 11:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0004_alter_project_created_on"),
    ]

    operations = [
        migrations.AddField(
            model_name="alumni",
            name="created_on",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2024, 1, 30, 16, 49, 36, 249151),
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="alumni",
            name="updated_on",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2024, 1, 30, 16, 49, 36, 249151),
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="event",
            name="created_on",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2024, 1, 30, 16, 49, 36, 247153),
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="event",
            name="updated_on",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2024, 1, 30, 16, 49, 36, 247153),
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="project",
            name="updated_on",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2024, 1, 30, 16, 49, 36, 248154),
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="team",
            name="created_on",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2024, 1, 30, 16, 49, 36, 248154),
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="team",
            name="updated_on",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2024, 1, 30, 16, 49, 36, 248154),
                null=True,
            ),
        ),
        migrations.AlterField(
            model_name="project",
            name="created_on",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2024, 1, 30, 16, 49, 36, 247153),
                null=True,
            ),
        ),
    ]
