// - Cards

export class Card {
    constructor(suit, rank, value, isJoker, hidden) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
        this.isJoker = isJoker;
        this.chosen = false;
        this.hidden = hidden;
    }

    cardName() {
        return `${this.rank}${this.suit} `;
    }
    get CardValue() {
        return this.value;
    }
    get IsJoker() {
        return this.isJoker;
    }
    choosetoggle() {
        console.log("this card was toggled!");
        this.chosen = !this.chosen;
    }
    isHidden(boolean) {
        this.hidden = boolean;
    }

}

