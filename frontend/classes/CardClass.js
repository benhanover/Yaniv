// Cards
export class Card {
  constructor(suit, rank, value, id, isJoker, hidden) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    this.isJoker = isJoker;
    this.chosen = false;
    this.hidden = hidden;
    this.id = id;
  }

  cardName() {
    return `${this.rank.slice(0, 1)}${this.suit.slice(0, 1).toUpperCase()}`;
  }
  get CardValue() {
    return this.value;
  }
  get IsJoker() {
    return this.isJoker;
  }
  // set chosen(bool) = bool;
  chooseToggle(cardElement) {
    this.chosen = !this.chosen;
    if (this.chosen) {
      cardElement.classList.add("chosen");
    } else {
      cardElement.classList.remove("chosen");
    }
  }
  isHidden(boolean) {
    this.hidden = boolean;
  }
}

