# import os
# os.environ.setdefault('DJANGO_SETTINGS_MODULE','myproject.settings')
#
# import django
# django.setup()
#
#
# import random
# from myapp.models import Topic, Book
# from faker import Faker
#
# fakegen = Faker()
# topics = ['Search','Social']
#
# def add_topic():
#     t = Topic.objects.get_or_create(top_name = random.choice(topics))[0]
#     t.save()
#     return t
#
# def populate(N=5):
#     for entry in range(N):
#         top = add_topic()
#         fake_name = fakegen.url()
#
#         book = Book.objects.get_or_create(book_name = fake_name)[0]
#
# if __name__ == '__main__':
#     print("populating")
#     populate(5)
#     print("populate")
