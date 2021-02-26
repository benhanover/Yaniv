export class Deck {

    constructor() {
      this.cards = [];
    }
    drawCard() {
        const topCard =  this.cards.splice(0,1);
        return topCard;
    }
}