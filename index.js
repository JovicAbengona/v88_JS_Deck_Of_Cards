class Card{
    constructor(suit, value, num_value){
        this.suit = suit;
        this.value = value;
        this.num_value = num_value;
    }

    show(){
        return `${this.value} of ${this.suit} (Value: ${this.num_value})`;
    }
}

class Deck{
    constructor(){
        this.cards = [];
        this.suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
        this.values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        this.num_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.build();
    }

    build(){
        for(let suit of this.suits){
            for(let value = 0, num_value = 0; value < this.values.length && num_value < this.num_values.length; value++, num_value++){
                this.cards.push(new Card(suit, this.values[value], this.num_values[num_value]));
            }
        }
    }

    showDeck(){
        console.log(`======== SHOW ALL ${this.cards.length} CARDS ========`);
        for(let card of this.cards){
            console.log(card.show());
        }
    }

    shuffle(){
        console.log("======== SHUFFLE CARDS ========");
        for(let index = this.cards.length - 1; index > 0; index--){
            let random = Math.floor(Math.random() * index);
            let temp = this.cards[index];
            this.cards[index] = this.cards[random];
            this.cards[random] = temp;
        }
        this.showDeck();
    }

    deal(){
        let card = this.cards.pop();
        console.log("======== DEAL A CARD ========");
        console.log(card.show());
    }

    reset(){
        this.cards = [];
        this.build();
    }
}