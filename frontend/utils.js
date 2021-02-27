import { Deck, Player, PileDeck, TableDeck, Card } from './export-tomain.js';


// Event Listeners:
// ================
function addPlayer(event, gameControl, addPlayerButton, startGameButton) {

    const nameInput = document.getElementById('player-name');
    const newPlayerName = nameInput.value;
    nameInput.value = "";
    const playerDeck = gameControl.tableDeck.deal5Cards();
    const avatar = getCheckedAvatar();
    const players = gameControl.players;
    console.log(players);
    const playerId = gameControl.players.length + 1;
    const newPlayer = new Player(playerId, playerDeck, newPlayerName, avatar);

    gameControl.players = players;
    players.push(newPlayer);
    console.log(players);
    rednderWelcomePagePlayers(newPlayer);
    if (players.length == 2) {
        startGameButton.hidden = false;
    }
    else if (players.length === 4) {
        addPlayerButton.hidden = true;
    }
}





//    functions :
// ================

// returns the checked avatar
function getCheckedAvatar() {
    const allAvatars = document.getElementsByName('avatar');
    for (const avatar of allAvatars) {
        if (avatar.checked) {
            return avatar.value;
        }
    }
}
// render added players to the welcome page
function rednderWelcomePagePlayers(player) {
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
// messing around
function guessACard() {
    const deck = new TableDeck();
    deck.shuffle();
    const player = new Player([], "Danks", 'male');

    player.drawTableCard(deck.drawCard());
    console.log(player.playerDeck[0]);
}


// situations to render:
// =====================
// playerDeck:
//   - after every throwCards().
//   - after every drawcards().
//   - 
//   - count scores.
//   - 

// 
// function render(params) {

// }

function startGame(gameControl) {

    // 1 pass to function
    const form = catchElement("form-background");
    form.style.display = 'none';

    gameControl.players = randomOrderArray(gameControl.players);
    gameControl.players[0].turn = true;

    renderBoard(gameControl);
}


function createDesk() {
    const deskContainer = catchElement("desk-container");
    const piledeck = newElement("div", "pile-deck", null, deskContainer);
    const tabledeck = newElement("div", "table-deck", null, deskContainer);
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


function createPlayerPositions(players) {
    const possiblePossisions = ['current-player', 'left-player', 'top-player', 'right-player']
    if (players.length === 2) {
        return [possiblePossisions[0], possiblePossisions[2]]
    } else if (players.length === 3) {
        return [possiblePossisions[0], possiblePossisions[1], possiblePossisions[2]]
    }
    return possiblePossisions;
}


function renderBoard(gameControl) {
    const players = gameControl.players;
    const playerPositions = createPlayerPositions(players)
    for (let index = 0; index < players.length; index++) {
        createPlayerDiv(players[index], playerPositions[index]);
    }
    createDesk()
}

// avatar: "avatar3"
// id: 1
// name: "bla"
// playerDeck: (5) [Card, Card, Card, Card, Card]
// score: 0
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
    // 


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
function cardsCounter(playerDeck) {
    let sum = 0;
    console.log(playerDeck);
    for (const card of playerDeck) {
        sum += card.value;
    }
    return sum;
}

// : Card
// chosen: false
// hidden: true
// isJoker: false
// rank: "8"
// suit: "diamond"
// value: 8
// CardValue: (...)
// IsJoker: (...)
// __proto__:
// CardName: ƒ CardName()

function newElement(element, className, content, appendTo, id) {
    const x = document.createElement(element);
    x.classList.add(className);
    x.setAttribute("id", id);
    x.innerText = content;
    appendTo.append(x);
    return x;
}

function catchElement(id) {
    const x = document.getElementById(id);
    return x;
}

function playersScore(players) {
    let scoreTable = { total: {}, currentRound: {} };
    let ROUNDwinners = [];
    winnerRoundScore = 0;
    // let winner = {name:null , score: null}
    for (const player of players) {
        let roundScore = 0;

        for (const card of player.playerDeck) {
            roundScore += card.value;
        }
        player.score += roundScore;
        scoreTable.total[player.name] = player.score;
        scoreTable.currentRound[player.name] = roundScore;
        if (roundScore > winnerRoundScore) {
            winnerRoundScore = roundScore;
            winner = player.name;
        } else if (roundScore > winnerRoundScore) {

        }

    }
    console.log(scoreTable);
    return scoreTable;
}

function loadGameSetup() {
    const deck = new Deck();
}



function randomOrderArray(arr) {
    let newArr = [];
    while (arr.length > 0) {
        let index = Number(Math.round(Math.random() * (arr.length - 1)));
        newArr.push(...arr.splice(index, 1));
    }
    return newArr
}

export { addPlayer, getCheckedAvatar, rednderWelcomePagePlayers, guessACard, startGame, createDesk, renderBoard, createPlayerDiv, cardsCounter, newElement, catchElement, playersScore, loadGameSetup, randomOrderArray }