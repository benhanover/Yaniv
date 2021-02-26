// More Features
// ==============
// counter to show the sum of the players cards.
//draw card-badname

// imports
import { Deck , Player , PileDeck , TableDeck , Card , playersScore } from './export-tomain.js';

import * as Functions from './utils.js';

// elements
const addPlayerButton = document.getElementById('add-player-button');
const startGameButton = document.getElementById('start-button');
const players = [];

// run program
const deck = new TableDeck();
deck.shuffle();
const pileDeck = new PileDeck();
const gameControl = { 
    tableDeck: deck,
    pileDeck: pileDeck,
    players: players,
}
addPlayerButton.addEventListener('click', (event) => {
    Functions.addPlayer(event, gameControl)
    if (players.length == 2) {
        startGameButton.hidden = false;
    }
    else if(players.length === 4){
          addPlayerButton.hidden = true;
    }
});



startGameButton.addEventListener('click', (event) => {Functions.renderBoard()})






// loadGameSetup(); // players creation
// const players = [{player1}, {player2}, {player3}, {player4}];
// createGame(players) {
//     while(!winner){
//        round(players);
//         playersUpdate(players)
//         //   -optional removePlayers();
//         scoreUpdate(players);
//         showScore();
//     }

// // }; // Deck => playerDeck TableDeck', 'PileDeck'for each player
// async function round(players){
// const currentPlayer = player[0]
//     while(!Yaniv){
//        await turn(currentPlayer);
//        passTurn();
//     }

//     scoreCount(players);

// };
// startTurn(player);
// callYaniv();
// chooseCard();

// function trun(player) {
//     player.throwCards(cards);
//     player.drawTableCard(deck.drawCard())
// }
// // function removePlayer(player) {

// }

// scoreCount(players) {
//     for (const player in players) {
//         players.score = sum(players.cards);
//     }
// }

// function playersUpdate() {

//     if(player.score > 200) {
//       players = removePlayer(playerToRemove);
//     }
// }

// YanivDecleration() {

// }
// function renderTable(Board);
// function renderTable([players], tableDeck, pileDeck);

// Use Class name 'Deck', and classes 'PlayerDeck', 'TableDeck', and 'PileDeck' which inherit from 'Deck'.


// // guess a card and run in console.
    // guessACard();

                                    
                                            
      