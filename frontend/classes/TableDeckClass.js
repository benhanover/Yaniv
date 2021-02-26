import {Deck} from './DeckClass.js';
import {Card} from './CardClass.js';


export default class TableDeck extends Deck{
  constructor (){
    super();
    const signs = ['heart','club', 'diamond', 'spade'];
    const ranksAndValues =[['Ace',1], ['2',2], ['3',3], ['4' ,4], ['5',5], ['6',6], ['7',7], ['8',8], ['9',9], ['10',10], ['Jack',10], ['Queen',10], ['King',10]];
    for (const sign of signs) {
      for (const rankAndVal of ranksAndValues) {
        this.cards.push(new Card(sign,rankAndVal[0],rankAndVal[1],false));
      }

    }
    this.cards.push(new Card("Joker","BlackJoker",0,true));
    this.cards.push(new Card("Joker","RedJoker",0,true));
  
  }


  setCards(cards) {
    this.cards = cards;
  }

  shuffle() {
    let newCardsArray = [];
    let cardsLength = this.cards.length;
    for(let i = 0 ; i < cardsLength ; i++) {
      let index = Math.round(Math.random()*(this.cards.length-1));
      newCardsArray.push(this.cards[index]);
      this.cards.splice(index , 1);
    } 
    this.cards =  newCardsArray;     
    }


    dealCards() {
        const fiveCards =  this.cards.splice(0,5);
        return fiveCards;
    }
}