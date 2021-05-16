class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }

    show(){
        return `${this.value} of ${this.suit}`;
    }
}

class Deck{
    constructor(){
        this.cards = [];
        this.suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
        this.values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.build();
    }

    build(){
        for(let suit of this.suits){
            for(let value of this.values){
                this.cards.push(new Card(suit, value));
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
        console.log(`Dealt Card: ${card.value} of ${card.suit}`);
    }

    reset(){
        this.cards = [];
        this.build();
    }
}