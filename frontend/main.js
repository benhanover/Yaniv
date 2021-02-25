cardDealer = import()
// Use Class name 'Card' with properties 'suit': (Spade, Heart, Club, Diamond), 'rank'(A, 1-10, J, Q, K), 'isJocker'(true, false).

// button 

loadGameSetup(); // players creation
const players = [{player1}, {player2}, {player3}, {player4}];
createGame(players) {
    while(!winner){
       round(players);
        playersUpdate(players)
        //   -optional removePlayers();
        scoreUpdate(players);
        showScore();
    }

}; // Deck => playerDeck TableDeck', 'PileDeck'for each player
async function round(players){
const currentPlayer = player[0]
    while(!Yaniv){
       await turn(currentPlayer);
       passTurn();
    }
    
    scoreCount(players);

};
startTurn(player);
callYaniv();
chooseCard();

function removePlayer(player) {
    
}

scoreCount(players) {
    for (const player in players) {
        players.score = sum(players.cards);
    }
}

function playersUpdate() {
    
    if(player.score > 200) {
      players = removePlayer(playerToRemove);
    }
}

YanivDecleration() {
    
}

      // Use Class name 'Deck', and classes 'PlayerDeck', 'TableDeck', and 'PileDeck' which inherit from 'Deck'.
    
     
      
      
      CLASSES-
      - Cards
        - props => (rank, suit, isJoker, value, /*Owner*/ );  // maybe 
        - methods => getters 
      - Deck 
        - props => [Cards];
        - methods => shuffle, dealCards
      - Player 
        - props => playerDeck, name, score, genderAvatar
        - methods => drawCard, throwCards(1card,2cards,3cards,4cards,seria), Yaniv, (stickCard)
      OBJECTS-
        - BOARD 
        - (Reminders of cards) Deck => ([cards]);
        - PileDeck => ([cards]);
      
        function renderTable(Board);
        function renderTable([players], tableDeck, pileDeck);
      
      //   Basicly inorder to keep track of all the cards we start by distributing cards from the shuffeld deck to all of the players, than the remaining of the cards are set as the tableDeck. Now we have all of the cards either in the players hand or in the tableDeck. the pileDeck gets its cards from the players and the tableDeck so no double cards. 
      
class Card {
  constructor(suit, rank, value, isJoker){
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    this.isJoker = isJoker;
  }

  getCardName() {
    return `${this.rank}${this.suit} `;
  }
  getCardValue() {
    return this.value ;
  }
  getIsJoker(){
    return this.isJoker;
  }    
}








