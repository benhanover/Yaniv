export class Player {
  constructor(id, playerdeck, name, avatar) {
    this.id = id;
    this.playerDeck = playerdeck;
    this.name = name;
    this.score = 0;
    this.avatar = avatar;
  
  }
  // - Player 
  //   - props => playerDeck, name, score, genderAvatar
  //   - methods => drawTableCard, drawPileCard, throwCards(1card,2cards,3cards,4cards,seria), Yaniv, (stickCard)
  //   - 
    drawTableCard(card) {
      this.playerDeck.push(...card);        // fix after classes fix
    }

    // methods to complete
    // ===================
    drawPileCard() {
      
    }

    throwCards() {  //  !!!! diffuculty level over 9000 !!!!
        
    }

    Yaniv() {

    }

    stickCards(){

    }
}