export class Player {
  constructor(playerdeck, name, genderAvatar) {
    this.playerDeck = playerdeck;
    this.name = name;
    this.score = 0;
    this.genderAvatar = genderAvatar;
  }
  // - Player 
  //   - props => playerDeck, name, score, genderAvatar
  //   - methods => drawTableCard, drawPileCard, throwCards(1card,2cards,3cards,4cards,seria), Yaniv, (stickCard)
  //   - 
    drawCard(card) {
      this.playerDeck.push(...card);        // fix after classes fix
    }

    // methods to complete
    // ===================

    // drawPileCard(card) {
    //   this.playerDeck.push(...card);
    // }

// - 1card
// SVGMaskElement
// - 2cards

    throwCards(cards , towho){ 
      for (const card of cards) {
       let currentCard = card.CardName();
       
        for (const playercard of this.playerDeck) {
          let playercurrentCard = playercard.CardName()
          
          if(playercurrentCard === currentCard){
           
            let index = this.playerDeck.indexOf(card);
            
            this.playerDeck.splice(index, 1);
            
          }
        }
      }// 1card/the same rank card(2,3,4)/same suit in perfect order(3,4cards))  !!!! diffuculty level over 9000 !!!!
      towho.cards.push(...cards);
      return cards;
    }

    Yaniv(players) { ///all cards reveald=> chacking the score of all players=>1)how is the winner/asaf2)gving score fore this round 3.another round with players or endgame 
      for (const player of players) {
        // console.log(player.playerDeck);
        for (const card of player.playerDeck) {
          // console.log(card);
          card.isHidden(false);
        }
      }
    }

    stickCards(){

    }
}

 













