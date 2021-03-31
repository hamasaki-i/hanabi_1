class Card {
    constructor(color, value) {
        this.color = color;
        this.value = value;
    }
    getCardInfo(){
        return this.color + this.value;
    }
}
class Deck {
    constructor(){
        this.deck = Deck.generateDeck();
    }


    static generateDeck(){
        let newDeck = [];
        const colors = ["red","blue","yellow","green","white"];
        for(let i = 0;i < colors.length;i++){
            for(let j = 1;j <= 5;j++){

                if(j == 1) let howManyCards = 3;
                else if(j == 5) let howManyCards = 1;
                else let howManyCards = 2;

                for(let k = 0;k < howManyCards;k++){
                    newDeck.push(new Card(colors[i],j));
                }
            }
        }
        return newDeck;
    }

    shuffle(){
        let deckSize = this.deck.length;
        for(let i = 0;i < 100;i++){
            a = Math.floor( Math.random() * (deckSize-1));
            b = Math.floor( Math.random() * (deckSize-1));
            temp = deck[a];
            deck[a] = deck[b];
            deck[b] = temp;
        }
    }

    printDeck() {
        console.log("Displaying cards...")
        for (let i = 0; i < this.deck.length; i++) {
            console.log(this.deck[i].getCardInfo());
        }
    }
}

deck1 = new Deck();
deck1.printDeck();