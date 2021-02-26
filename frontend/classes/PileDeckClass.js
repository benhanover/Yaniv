import {Deck} from './DeckClass.js';

export class PileDeck extends Deck{

    constructor() {
        super(true);
        
    }
    transitToTableDeck() {
        const newTableDeckCards = this.cards;
        this.cards = [];
        return newTableDeckCards;
    }
    
}
// tableDeck.cards = pileDeck.cards
// tableDeck = pileDeck.transitToTableDeck(tableDeck)
// tableDeck