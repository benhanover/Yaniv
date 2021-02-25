const Dealer = require("card-dealer/dealer");
const standardDeck = require("card-dealer/decks/standard");
const dealer = new cardDealer.Dealer(standardDeck);
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
    
      // CLASSES-
      //   - Card: props => suit, rank, isJoker
      //   - Deck
      //   - PlayerDeck
      //   - TableDeck
      //   - PileDeck
      //   - Player