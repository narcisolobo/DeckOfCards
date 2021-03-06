class Card {
    constructor(suit, strValue, numValue) {
        this.suit = suit;
        this.strValue = strValue;
        this.numValue = numValue;
    }
    show() {
        console.log(`This card is the ${this.strValue} of ${this.suit}, and its numeric value is ${this.numValue}.`);
        return this;
    }
}

class Deck {
    constructor(suits, strValues, numValues) {
        this.reset();
    }

    shuffle() {
        var m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }

    reset() {
        this.deck = []
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < strValues.length; j++) {
                const newCard = new Card(suits[i], strValues[j], numValues[j]);
                this.deck.push(newCard);
            }
        }
        return this;
    }

    deal() {
        var idx = Math.floor(Math.random() * (this.deck.length - 0));
        var dealtCard = this.deck.splice(idx, 1);
        return dealtCard;
    }
}

class Person {
    constructor(name, deck, numCards) {
        this.name = name;
        this.hand = [];

        for (let i = 1; i <= numCards; i++) {
            let dealtCard = deck.deal();
            this.hand.push(dealtCard);
        }
    }

    takeCard(deck) {
        let takenCard = deck.deal();
        this.hand.push(takenCard);
        return this;
    }

    discard(idx) {
        this.hand.splice(idx, 1);
        return this;
    }
}

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const strValues = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
const numValues = [];

for (let i = 1; i <= strValues.length; i++) {
    numValues.push(i);
}