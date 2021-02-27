import { cardsCounter } from '../utils.js';
export class Player {
  constructor(id, playerdeck, name, avatar) {
    this.id = id;
    this.playerDeck = playerdeck;
    this.name = name;
    this.score = 0;
    this.avatar = avatar;
    this.turn = false;
    this.cardsSum = this.sumHandFirstRound();
  }

  drawCard(card) {
    this.playerDeck.push(...card);
  }


  throwCards(cards, towho) {
    for (const card of cards) {
      let currentCard = card.CardName();

      for (const playercard of this.playerDeck) {
        let playercurrentCard = playercard.CardName()

        if (playercurrentCard === currentCard) {

          let index = this.playerDeck.indexOf(card);

          this.playerDeck.splice(index, 1);

        }
      }
      towho.cards.push(...cards);
      return cards;
    }
  }

  Yaniv(players) {
    for (const player of players) {

      for (const card of player.playerDeck) {

        card.isHidden(false);
      }
    }
    return "yaniv"
  }
// Merge the two
  sumHandFirstRound() {
    let sum = 0;
    for (const card of this.playerDeck) {
        sum += card.value;
    }
    return sum;
  }

  sumHand() {
    let sum = 0;
    for (const card of this.playerDeck) {
        sum += card.value;
    }
    this.cardSum = sum;
  }
// Change name
  resetRoundScoreAndAddToScoreProp() {
    this.score += this.cardSum;
  }



  // stickCards(cards){
  //   for (const card of cards) {
  //     let currentCard = card.CardName();

  //     for (const playercard of this.playerDeck) {
  //       let playercurrentCard = playercard.CardName()

  //       if(playercurrentCard === currentCard){

  //         let index = this.playerDeck.indexOf(card);

  //         this.playerDeck.splice(index, 1);

  //       }
  //     }
  //     towho.cards.push(...cards);
  //     return cards;
  //   }
  // }


}

  // 1card/the same rank card(2,3,4)/same suit in perfect order(3,4cards))  !!!! diffuculty level over 9000 !!!!
  ///all cards reveald=> chacking the score of all players=>1)how is the winner/asaf2)gving score fore this round 3.another round with players or endgame
//   - methods => drawTableCard, drawPileCard, throwCards(1card,2cards,3cards,4cards,seria), Yaniv, (stickCard)

