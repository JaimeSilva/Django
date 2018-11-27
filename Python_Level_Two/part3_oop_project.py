#####################################
### WELCOME TO YOUR OOP PROJECT #####
#####################################

# For this project you will be using OOP to create a card game. This card game will
# be the card game "War" for two players, you an the computer. If you don't know
# how to play "War" here are the basic rules:
#
# The deck is divided evenly, with each player receiving 26 cards, dealt one at a time,
# face down. Anyone may deal first. Each player places his stack of cards face down,
# in front of him.
#
# The Play:
#
# Each player turns up a card at the same time and the player with the higher card
# takes both cards and puts them, face down, on the bottom of his stack.
#
# If the cards are the same rank, it is War. Each player turns up three cards face
# down and one card face up. The player with the higher cards takes both piles
# (six cards). If the turned-up cards are again the same rank, each player places
# another card face down and turns another card face up. The player with the
# higher card takes all 10 cards, and so on.
#
# There are some more variations on this but we will keep it simple for now.
# Ignore "double" wars
#
# https://en.wikipedia.org/wiki/War_(card_game)
"""
YES
"""

import random
import os
import time


def cls():
    """
    cls
    """
    os.system('cls' if os.name == 'nt' else 'clear')




# Two useful variables for creating Cards.
SUITE = '♥ ♦ ♠ ♣'.split()
RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()





class Deck:
    """
    This is the Deck Class. This object will create a deck of cards to initiate
    play. You can then use this Deck list of cards to split in half and give to
    the players. It will use SUITE and RANKS to create the deck. It should also
    have a method for splitting/cutting the deck in half and Shuffling the deck.
    """
    def __init__(self):
        """
        init
        """
        self.deck = []

    def create(self):
        """
        create
        """
        for ranks in RANKS:
            for suite in SUITE:
                self.deck.append(ranks + suite)


    def shuffle(self):
        """
        shuffle
        """
        random.shuffle(self.deck)

    def print_deck(self):
        """
        print deck
        """
        print(self.deck)

    def get_deck(self):
        """
        get Deck
        """
        return self.deck

    def split(self, hand_x, hand_y):
        """
        split
        """
        for i, card in enumerate(self.deck):
            if i % 2 == 0:
                hand_x.add(card)
            if i % 2 != 0:
                hand_y.add(card)




class Hand:
    '''
    This is the Hand class. Each player has a Hand, and can add or remove
    cards from that hand. There should be an add and remove card method here.
    '''
    def __init__(self):
        """
        init
        """
        self.hand = []
        self.pop = []

    def add(self, card):
        """
        add
        """
        self.hand.insert(0, card)

    def remove(self):
        """
        remove
        """
        self.pop = self.hand.pop()
        return self.pop

    def print_pop(self):
        """
        printPop
        """
        print(self.pop)

    def get_hand(self):
        """
        getHand
        """
        return self.hand

    def print_hand(self):
        """
        print
        """
        print(self.hand)




class Player:
    """
    This is the Player class, which takes in a name and an instance of a Hand
    class object. The Payer can then play cards and check if they still have cards.
    """
    def __init__(self, name, hand):
        """
        init
        """
        self.hand = hand
        self.name = name

    def check_cards(self):
        """
        checkCards
        """
        return len(self.hand.get_hand())

    def get_name(self):
        """
        get name
        """
        return self.name


######################
#### GAME PLAY #######
######################
print("Welcome to War, let's begin...")


HAND_X = Hand()
HAND_Y = Hand()



PLAYER_X = Player('Jaime', HAND_X)
PLAYER_Y = Player('Bill', HAND_Y)

MY_DECK = Deck()
MY_DECK.create()
MY_DECK.shuffle()
MY_DECK.split(HAND_X, HAND_Y)

while PLAYER_X.check_cards() != 0 or PLAYER_Y.check_cards() != 0:

    print('\n')
    HAND_X.print_hand()
    print('\n')
    HAND_Y.print_hand()
    print('\n')

    print('\n\t\t\t\t'+PLAYER_Y.get_name()+'\t\t\t\t'+PLAYER_X.get_name())

    CARD_Y = HAND_Y.remove()
    CARD_X = HAND_X.remove()

    print('\t\t\t\t'+CARD_Y+'\t\t\t\t', end='')

    USER = input("")
    if USER == "":
        print('\t\t\t\t\t\t\t\t'+CARD_X)


    DECK_VALUES = {"A":14, "2":2, "3":3, "4":4, "5":5,
                   "6":6, "7":7, "8":8, "9":9, "1":10,
                   "J":11, "Q":12, "K":13}


    print(DECK_VALUES[CARD_X[0]])
    print(DECK_VALUES[CARD_Y[0]])

    if DECK_VALUES[CARD_X[0]] > DECK_VALUES[CARD_Y[0]]:
        HAND_X.add(CARD_Y)
        HAND_X.add(CARD_X)

    if DECK_VALUES[CARD_X[0]] < DECK_VALUES[CARD_Y[0]]:
        HAND_Y.add(CARD_Y)
        HAND_Y.add(CARD_X)

    if DECK_VALUES[CARD_X[0]] == DECK_VALUES[CARD_Y[0]]: # WAR
        CARD_X1 = HAND_X.remove()
        CARD_X2 = HAND_X.remove()
        CARD_X3 = HAND_X.remove()
        CARD_XW = HAND_X.remove()

        CARD_Y1 = HAND_Y.remove()
        CARD_Y2 = HAND_Y.remove()
        CARD_Y3 = HAND_Y.remove()
        CARD_YW = HAND_Y.remove()

        if DECK_VALUES[CARD_XW[0]] > DECK_VALUES[CARD_YW[0]]:
            HAND_X.add(CARD_Y1)
            HAND_X.add(CARD_Y2)
            HAND_X.add(CARD_Y3)
            HAND_X.add(CARD_YW)
            HAND_X.add(CARD_X1)
            HAND_X.add(CARD_X2)
            HAND_X.add(CARD_X3)
            HAND_X.add(CARD_XW)

        if DECK_VALUES[CARD_XW[0]] < DECK_VALUES[CARD_YW[0]]:
            HAND_Y.add(CARD_Y1)
            HAND_Y.add(CARD_Y2)
            HAND_Y.add(CARD_Y3)
            HAND_Y.add(CARD_YW)
            HAND_Y.add(CARD_X1)
            HAND_Y.add(CARD_X2)
            HAND_Y.add(CARD_X3)
            HAND_Y.add(CARD_XW)



    time.sleep(2)




    cls()
    # Use the 3 classes along with some logic to play a game of war!
