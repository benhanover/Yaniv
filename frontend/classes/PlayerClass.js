export class Player {
  constructor(playerdeck, name, score, genderAvatar) {
    this.playerDeck = playerdeck;
    this.name = name;
    this.score = score;
    this.genderAvatar = genderAvatar;
  }
  // - Player 
  //   - props => playerDeck, name, score, genderAvatar
  //   - methods => drawTableCard, drawPileCard, throwCards(1card,2cards,3cards,4cards,seria), Yaniv, (stickCard)
  //   - 
    drawTableCard(deck) {
      const newCard = deck.drawCard();        // fix after classes fix
      return newCard;
    }
    drawPileCard(pileDeck) {
      const newCard = pileDeck.drawCard();        // fix after classes fix
      return newCard;
    } 
  //   throwCards(cardsToThrow) {
        
  //   }
}