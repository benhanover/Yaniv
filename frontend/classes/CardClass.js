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

