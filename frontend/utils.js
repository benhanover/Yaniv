import { Deck, Player, PileDeck, TableDeck, Card } from './export-tomain.js';
import { hidWelcomePage, randomOrderArray, catchElement, newElement, guessACard, getCheckedAvatar } from './assistence-functions.js';



// Event Listeners:

function startGame(gameControl) {

    // 1 pass to function
    hidWelcomePage();
    

    gameControl.players = randomOrderArray(gameControl.players);
    gameControl.players[0].turn = true;

    renderBoard(gameControl);
}

function addPlayer(event, gameControl, addPlayerButton, startGameButton) {

    const nameInput = document.getElementById('player-name');
    const newPlayerName = nameInput.value;
    nameInput.value = "";
    const playerDeck = gameControl.tableDeck.deal5Cards();
    const avatar = getCheckedAvatar();
    const players = gameControl.players;
    const playerId = gameControl.players.length + 1;
    const newPlayer = new Player(playerId, playerDeck, newPlayerName, avatar);

    gameControl.players = players;
    players.push(newPlayer);
    console.log(players);
    renderWelcomePagePlayers(newPlayer);
    if (players.length == 2) {
        startGameButton.hidden = false;
    }
    else if (players.length === 4) {
        addPlayerButton.hidden = true;
    }
}

//   rendering functions :

// render added players to the welcome page
function renderWelcomePagePlayers(player) {
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

function createDesk() {
    const deskContainer = catchElement("desk-container");
    const decksDiv = newElement("div", "decks-div", null, deskContainer)
    const piledeck = newElement("div", "pile-deck", null, decksDiv);
    const tabledeck = newElement("div", "table-deck", null, decksDiv);
    piledeck.addEventListener("click", (gameControl) => {
        for (const player of gameControl.players) {
            if (player.turn) {
                player.drawCard(gameControl.piledeck.drawCard());
            }
        }
        renderBoard(gameControl);
    });
    tabledeck.addEventListener("click", (gameControl) => {
        for (const player of gameControl.players) {
            if (player.turn) {
                player.drawCard(gameControl.tabledeck.drawCard());
            }
        }
        renderBoard(gameControl);
    });
}

function renderBoard(gameControl) {
    const players = gameControl.players;
    const playerPositions = createPlayerPositions(players);
    for (let index = 0; index < players.length; index++) {
        createPlayerDiv(players[index], playerPositions[index]);
    }
    createDesk()
}

function createPlayerDiv(player, playerPosition) {
    const playerId = player.id;
    const playerName = player.name;
    const playerAvatar = player.avatar;
    const playerScore = player.score;
    const playerDeck = player.playerDeck;
    const playerCardsSum = player.cardsSum;

    const deskContainer = catchElement('desk-container');

    const playerContainer = newElement('div', 'player-container', null, deskContainer);
    playerContainer.classList.add(playerPosition);
    newElement('span', 'cards-sum-span', playerCardsSum, playerContainer);

    // give player-container class to place in board(left/top/etc..)
    // hide welcome div
    
    const playerCards = newElement('div', 'player-deck', null, playerContainer)
    console.log(player);
    for (let card of playerDeck) {
        const newCardElement = newElement('span', 'player-card', card.cardName(), playerCards);
        newCardElement.addEventListener('click', newCardElement.chooseToggle);
    }

    const playerProfile = newElement('div', 'player-profile', null, playerContainer)
    newElement('span', 'name-span', playerName, playerProfile);
    newElement('span', 'avatar-span', playerAvatar, playerProfile);
    newElement('span', 'score-span', playerScore, playerProfile);

    newElement('span', 'id-span', playerId, playerContainer);

}

// update scoretable with total score and current round score
// doenst concider yaniv and asaf
function updateScoreTable(players) {
    // need declare this object in gameControl
    let scoreTable = { total: {}, currentRound: {} };
        for (const player of players) {
            playerRoundScore = player.score - scoreTable.total[player.name];
            scoreTable.total[player.name] = player.score;
            scoreTable.currentRound[player.name] = playerRoundScore;
        }
        return scoreTable;
}

// resets the hand score of each player and sums it in his score property
function playersCalculateFinshedRound(players) {
    for (const player of players) {
        player.resetRoundScoreAndAddToScoreProp();
    }
}
//()
// sets the board to a new round
function newRoundDealing(gameControl) {
    if(JSON.stringify(gameControl) === JSON.stringify({})) {
        const players = [];
        const deck = new TableDeck();
        deck.shuffle();
        const pileDeck = new PileDeck();
        gameControl = {
            tableDeck: deck,
            pileDeck: pileDeck,
            players: players
        }
        renderBoard(gameControl);
    } else {
        const deck = new TableDeck();
        deck.shuffle();
        const pileDeck = new PileDeck();
        gameControl.tableDeck = deck;
        gameControl.pileDeck = pileDeck;
        for(const player of gameControl.players) {
            player.playerDeck = gameControl.deck.deal5Cards();
        }
        renderBoard(gameControl);
    }

}

function createPlayerPositions(players) {
    const possiblePositions = ['current-player', 'left-player', 'top-player', 'right-player']
    if (players.length === 2) {
        return [possiblePositions[0], possiblePositions[2]]
    } else if (players.length === 3) {
        return [possiblePositions[0], possiblePositions[1], possiblePositions[2]]
    }
    return possiblePositions;
}


export { addPlayer, getCheckedAvatar, renderWelcomePagePlayers, guessACard, startGame, createDesk, renderBoard, createPlayerDiv, newElement, catchElement, randomOrderArray, newRoundDealing }