###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

# There are a few things you will have to discover for yourself for this game!
# Here are some useful hints:

# Try to figure out what this code is doing and how it might be useful to you
import random
digits = list(range(10))
random.shuffle(digits)

l

guess = ""

while guess != "quit":
     guess = input("What is your guess? ")

     if guess=="quit":
         break

     x = int(guess[0])
     y = int(guess[1])
     z = int(guess[2])

     if x == digits[0] and y == digits[1] and z == digits[2]:
         break;

     if x == digits[0] or y == digits[1] or z == digits[2]:
         print("Match: You've guessed a correct number in the correct position\n")
         continue

     if x in digits[:3] or y in digits[:3] or z in digits[:3]:
         print("Close: You've guessed a correct number but in the wrong position\n")
         continue

     else:
         print("Nope: You haven't guess any of the numbers correctly\n")

print("WOOT!")
print(digits[:3])
# Think about how you will compare the input to the random number, what format
# should they be in? Maybe some sort of sequence? Watch the Lecture video for more hints!
