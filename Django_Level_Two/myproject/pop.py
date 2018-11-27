#
# import os
# os.environ.setdefault('DJANGO_SETTINGS_MODULE','myproject.settings')
#
#
# import django
# django.setup()
#
#
#
# import random
# from myapp.models import User
# from faker import Faker
#
# fakegen = Faker()
#
# def populate(N=5):
#
#
#     for entry in range(N):
#
#         # Get Topic for Entry
#
#
#         # Create Fake Data for entry
#         fake_first_name = fakegen.name()
#         fake_last_name = fakegen.name()
#         fake_email = fakegen.email()
#
#         # Create new Webpage Entry
#         User.objects.get_or_create(first_name = fake_first_name, last_name = fake_last_name, email = fake_email)[0]
#
#
#
#
# if __name__ == '__main__':
#     print("Populating the databases...Please Wait")
#     populate(20)
#     print('Populating Complete')
