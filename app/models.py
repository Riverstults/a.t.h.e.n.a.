
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Person(models.Model):
	user = models.OneToOneField(User,null = True, on_delete=models.CASCADE)
	name = models.CharField(max_length=200, null=True)

    
	def __str__(self):
		return self.name
