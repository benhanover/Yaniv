import { Card } from './classes/CardClass.js';
import TableDeck from './classes/TableDeckClass.js';
import {PileDeck} from './classes/PileDeckClass.js';
import { Player } from './classes/PlayerClass.js';
import { Deck } from './classes/DeckClass.js';
// import * as Utils from './utils.js';


// Event Listeners:
// ================
  function addPlayer(event, gameControl) {
      const nameInput = document.getElementById('player-name');
      const newPlayerName = nameInput.value;
      nameInput.value = "";
      const playerDeck = gameControl.tableDeck.dealCards();
      const avatar = getCheckedAvatar();
      const players = gameControl.players;
      const playerId = gameControl.players.length + 1;
      const newPlayer = new Player(playerId, playerDeck, newPlayerName, avatar);

      players.push(newPlayer);
      gameControl.players = players;
      console.log(gameControl);
      rednderWelcomePagePlayers(newPlayer);
  }




  
//    functions :
// ================

  function getCheckedAvatar() {
      const allAvatars = document.getElementsByName('avatar');
      for(const avatar of allAvatars) {
          if (avatar.checked) {
              return avatar.value;
          }
      }
  }

  function rednderWelcomePagePlayers(player){
    const playerContainer = document.getElementById('players-container');
    
        console.log(player); 
        const playerName = player.name;
        const playerAvatar = player.avatar;
        const playerId = player.id;
        
        const div = document.createElement('div');
        div.classList.add("welcome-player-div");

        const elemnentIndex = document.createElement('span');
        elemnentIndex.innerText = playerId;
        div.appendChild(elemnentIndex);

        const elementPlayerName = document.createElement('span');
        elementPlayerName.innerText = playerName;
        div.appendChild(elementPlayerName);

        const elementPlayerAvatar = document.createElement('span');
        elementPlayerAvatar.innerText = playerAvatar;
        div.appendChild(elementPlayerAvatar);

        playerContainer.appendChild(div);

  }

  function guessACard() {
    const deck = new TableDeck();
    deck.shuffle();
    const player = new Player([], "Danks", 'male');
    
    player.drawTableCard(deck.drawCard());
    console.log(player.playerDeck[0]);
}

function renderBoard(players, decks) {
    
}
        
function playersScore(players){
    let scoreTable = {total:{} , currentRound: {}};
    let ROUNDwinners = [];
    winnerRoundScore = 0;
    // let winner = {name:null , score: null}
    for (const player of players) {
        let roundScore = 0;
        
        for (const card of player.playerDeck) {
            roundScore += card.value;
        }
        player.score+=roundScore;
        scoreTable.total[player.name]= player.score;
        scoreTable.currentRound[player.name]= roundScore;
      if(roundScore > winnerRoundScore){
          winnerRoundScore = roundScore;
          winner = player.name;
        }else if(roundScore > winnerRoundScore) {
            
        }
        
    }
    console.log(scoreTable);
    return scoreTable;
}

function loadGameSetup() {
    const deck = new Deck();
}

class Winner {
    constructor(name,score){
        this.name = name ;
        this.score = score ;
    }
}
export {addPlayer, getCheckedAvatar, guessACard, renderBoard, playersScore, loadGameSetup};
