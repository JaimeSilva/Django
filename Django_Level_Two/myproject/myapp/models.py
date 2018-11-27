from django.db import models
from datetime import datetime

# # Create your models here.
class Topic(models.Model):
    top_name = models.CharField(max_length=100, unique = True)

    def __str__(self):
        return self.top_name



class Sensor(models.Model):
    name = models.CharField(max_length = 15)
    temperature = models.CharField(max_length = 5)
    altitude = models.CharField(max_length = 5)
    pressure = models.CharField(max_length = 5)
    date = models.DateTimeField()

    def __str__(self):
        return self.name


# class Book(models.Model):
#     book_name = models.CharField(max_length=100, unique = True)
#
#     def __str__(self):
#         return self.book_name
#
#
# class User(models.Model):
#     first_name = models.CharField(max_length = 20)
#     last_name = models.CharField(max_length = 20)
#     email = models.CharField(max_length = 70)
#
#     def __str__(self):
#         return self.email
