import { Deck, Player, PileDeck, TableDeck, Card } from './export-tomain.js';


// Event Listeners:
// ================
function addPlayer(event, gameControl) {
    const nameInput = document.getElementById('player-name');
    const newPlayerName = nameInput.value;
    nameInput.value = "";
    const playerDeck = gameControl.tableDeck.deal5Cards();
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
    for (const avatar of allAvatars) {
        if (avatar.checked) {
            return avatar.value;
        }
    }
}

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
function render(params) {

}
// unshift
function startGame(gameControl) {

    let firstToPlayIndex = Math.round(Math.random() * (gameControl.players.lenght - 1));
    let firstPlayer = gameControl.players.splice(firstToPlayIndex, 1)
    gameControl.players.unshift(firstPlayer);
    gameControl.players[0].turn = true;
}
//    while(!winner){
//        round(players);
//         playersUpdate(players)
//         //   -optional removePlayers();
//         scoreUpdate(players);
//         showScore();
//     }}
function createMainDeck() {
    const deskContainer = catchElement("desk-container");
    const piledeck = newElement("div", "pile-deck", null, deskContainer);
    const tabeldeck = newElement("div", "tabel-deck", null, deskContainer);
    piledeck.addEventListener("click", (gameControl) => {
        for (const player of gameControl.players) {
            if (player.turn) {
                player.drawCard(gameControl.piledeck.drawCard());
            }
        }
        renderBoard(gameControl);

    });
    tabeldeck.addEventLissner("click", (gameControl) => {
        for (const player of gameControl.players) {
            if (player.turn) {
                player.drawCard(gameControl.tabeldeck.drawCard());
            }
        }
        renderBoard(gameControl);
    });
}





function renderBoard(gameControl) {
    const players = gameControl.players;
    console.log(players);
    const pileDeck = gameControl.pileDeck;
    const tableDeck = gameControl.tableDeck;
    console.log(players[0]);
    for (let player of players) {
        createPlayerDiv(player);

    }

}

// avatar: "avatar3"
// id: 1
// name: "bla"
// playerDeck: (5) [Card, Card, Card, Card, Card]
// score: 0
// turn: false
function createPlayerDiv(player) {
    const playerId = player.id;
    const playerName = player.name;
    const playerAvatar = player.avatar;
    const playerTurn = player.turn;
    const playerScore = player.score;
    const playerDeck = player.playerDeck;

    const playerContainer = newElement('div', 'player-container', null, document.body);
    newElement('span', 'id-span', playerId, playerContainer);
    newElement('span', 'name-span', playerName, playerContainer);
    newElement('span', 'avatar-span', playerAvatar, playerContainer);
    newElement('span', 'score-span', playerScore, playerContainer);

    // give player-container class to place in board(left/top/etc..)
    // hide welcome div
    // 


    const playerCards = newElement('div', 'player-deck', null, playerContainer)
    for (let card of playerDeck) {
        const newCardElement = newElement('span', 'player-card', card.cardName(), playerCards);
        newCardElement.addEventListener('click', newCardElement.chooseToggle);
    }

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

function newElement(element, className, content, appendTo) {
    const x = document.createElement(element);
    x.classList.add(className);
    x.innerText = content;
    appendTo.append(x);
    return x;
}
//catching element from html
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

class Winner {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}






export { addPlayer, getCheckedAvatar, guessACard, renderBoard, playersScore, loadGameSetup, startGame };
