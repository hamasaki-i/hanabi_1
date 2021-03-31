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
                let howManyCards;
                if(j == 1)  howManyCards = 3;
                else if(j == 5) howManyCards = 1;
                else howManyCards = 2;

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
            let a = Math.floor( Math.random() * (deckSize-1));
            let b = Math.floor( Math.random() * (deckSize-1));
            let temp = this.deck[a];
            this.deck[a] = this.deck[b];
            this.deck[b] = temp;
        }
    }

    printDeck() {
        console.log("Displaying cards...")
        for (let i = 0; i < this.deck.length; i++) {
            console.log(this.deck[i].getCardInfo());
        }
    }

    draw(){
        return this.deck.pop();
    }
}

class Player {
    constructor(cards){
        this.hand = Player.generateHand(cards);
    }

    static generateHand(cards){
        let newHand = {};
        newHand["cards"] = cards;
        newHand["isNumVisible"] = Array(cards.length).fill(false);
        newHand["isColorVisible"] = Array(cards.length).fill(false);
        return newHand;
    }
}


class Dealer {
    static startGame(amountOfPlayers){
        let table = {
            "players":[],
            "deck":new Deck()
        }

        table["deck"].shuffle();

        for(let i = 0;i < amountOfPlayers;i++){
            let playerCard = [];
            for(let j = 0;j < Dealer.intialCards(amountOfPlayers);j++){
                playerCard.push(table["deck"].draw());
            }
            table["players"].push(new Player(playerCard));
        }
        return table;
    }

    static printTableInfo(table){
        console.log("プレイヤー数: " + table["players"].length);

        for(let i = 0;i < table["players"].length;i++){
            console.log("プレイヤー" + (i+1) + "の手札");
            for(let j = 0;j < table["players"][i].hand["cards"].length;j++){
                console.log("card " + (j+1) + "...")
                console.log("card:" + table["players"][i].hand["cards"][j].getCardInfo());
                console.log("isNumVisible:" + table["players"][i].hand["isNumVisible"][j]);
                console.log("isColorVisible:" + table["players"][i].hand["isColorVisible"][j]);
            }
        }
    }

    static intialCards(amountOfPlayer){
        if(amountOfPlayer == 2 || 3) return 5;
        else if(amountOfPlayer == 4 || 5) return 4;
        return -1;
    }
    
}

let table1 = Dealer.startGame(4);
console.log(table1["players"][0].hand["cards"][0].getCardInfo());
console.log("isNumVisible:" + table1["players"][0].hand["isNumVisible"][0]);
console.log("isColorVisible:" + table1["players"][0].hand["isColorVisible"][0]);
console.log(table1["players"][0].hand["cards"].length);

Dealer.printTableInfo(table1);