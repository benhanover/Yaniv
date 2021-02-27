export class Deck {

  constructor(upside) {
    this.cards = [];
    this.upside = upside;
  }


  drawCard() {

    if (this.upside) {
      const topCard = this.cards.splice(-1, 1);
      return topCard;
    } else {
      const topCard = this.cards.splice(0, 1);
      return topCard;
    }
  }

}


