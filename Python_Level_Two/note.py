
"""
Exceptions
"""
try:
    F = open('textfile.txt', 'r')
    F.write("Write some text")
except:
    print('ERROR: COULD NOT FIND FILE OR WRITE DATA')
finally:
    print("I always work, despite w/e")

# F = open('textfile.txt', 'r')
# F.write("Write some text")
# F.close()
# print('hello World')

import re

patterns = ['term1', 'term2']

text = 'This is a string with term1, not not the other'

for pattern in patterns:
	print("I'm search for: "+pattern)

	if re.search(pattern, text):
		print("Match")
	else:
		print("No match")
