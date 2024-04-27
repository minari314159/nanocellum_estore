from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),  # replace with your last migration
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='id',
            field=models.UUIDField(
                default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
