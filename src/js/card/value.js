class Value {
    constructor() {
        this.values = {
            zero: 0,
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9
        };
    }
}

class Color {
    constructor() {
        this.colors = {
            red: 'red',
            green: 'green',
            blue: 'blue',
            yellow: 'yellow'
        };
    }
}

class Card {
    constructor(value, color) {
        this.value = value;
        this.color = color;
    }

    toString() {
        return `${this.color} ${this.value}`;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
    }

    createDeck() {
        const values = new Value().values;
        const colors = new Color().colors;

        for(let color in colors) {
            for(let value in values) {
                this.cards.push(new Card(color, value))
            }
        }
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard() {
        return this.cards.pop();
    }
}