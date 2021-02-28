import { Deck, Player, PileDeck, TableDeck, Card } from './export-tomain.js';
import { hidWelcomePage, randomOrderArray, catchElement, newElement, guessACard, getCheckedAvatar, switchTurn } from './assistence-functions.js';



// Event Listeners:

function startGame(gameControl) {


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

function createDesk(gameControl) {
    const deskContainer = catchElement("desk-container");
    const pileDeck = newElement("div", "pile-deck", null, deskContainer);
    pileDeck.innerText = "Pile Deck";
    pileDeck.style.color = 'white';
    const tableDeck = newElement("div", "table-deck", null, deskContainer);
    tableDeck.innerText = "Table Deck";
    pileDeck.addEventListener("click", (event) => {
        for (const player of gameControl.players) {
            if (player.turn) {
                const chosensCount = document.querySelectorAll('.chosen').length;
                if (chosensCount === 0) {
                    alert("must choose a card");
                    return;
                }
                if (gameControl.pileDeck.cards.length === 0) {
                    alert("Canot draw card from an empty deck");
                    return;
                } else {
                    player.drawCard(gameControl.pileDeck.drawCard());
                    const playerThrownCards = player.throwCards();
                    gameControl.pileDeck.cards.push(...playerThrownCards);
                    renderBoard(gameControl);
                    // WHY THE FUCK DOES SETTIMEOUT ZERO FIX IT????
                    setTimeout(() => {
                        switchTurn(gameControl);
                        renderBoard(gameControl);
                    }, 2000);

                }
            }
        }
    });

    tableDeck.addEventListener("click", async (event) => {
        for (const player of gameControl.players) {
            if (player.turn) {

                const chosensCount = document.querySelectorAll('.chosen').length;
                if (chosensCount === 0) {
                    alert("must choose a card");
                    return;
                }
                if (gameControl.tableDeck.cards.length === 0) {
                    alert("Canot draw card from an empty deck");
                    return;
                }
                gameControl.pileDeck.cards.push(...player.throwCards());
                player.drawCard(gameControl.tableDeck.drawCard());
                await renderBoard(gameControl);
                // WHY THE FUCK DOES SETTIMEOUT ZERO FIX IT????
                setTimeout(() => {
                    switchTurn(gameControl);
                    renderBoard(gameControl);
                }, 2000);
            }
        }
    });
}

function renderBoard(gameControl) {
    const deskContainer = document.getElementById('desk-container');
    const stam = document.createElement('div');
    deskContainer.innerHTML = '';
    deskContainer.append(stam);
    const players = gameControl.players;
    const playerPositions = createPlayerPositions(players);
    for (let index = 0; index < players.length; index++) {
        createPlayerDiv(players[index], playerPositions[index]);
    }
    createDesk(gameControl);
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

    // display only cards of the player that has the turn
    if (player.turn === true) {
        const playerCards = newElement('div', 'player-deck', null, playerContainer);
        for (let card of playerDeck) {
            const newCardElement = newElement('span', 'player-card', card.cardName(), playerCards);
            newCardElement.addEventListener('click', (e) => {
                card.chooseToggle(newCardElement);
            });

        }
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
    if (JSON.stringify(gameControl) === JSON.stringify({})) {
        const players = [];
        const deck = new TableDeck();
        deck.shuffle();
        const pileDeck = new PileDeck();
        pileDeck.cards.push(deck.drawCard());
        gameControl = {
            tableDeck: deck,
            pileDeck: pileDeck,
            players: players
        };
        return gameControl;
    } else {
        const deck = new TableDeck();
        deck.shuffle();
        const pileDeck = new PileDeck();
        pileDeck.cards.push(deck.drawCard());
        gameControl.tableDeck = deck;
        gameControl.pileDeck = pileDeck;
        for (const player of gameControl.players) {
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

export { addPlayer, getCheckedAvatar, renderWelcomePagePlayers, guessACard, startGame, createDesk, renderBoard, createPlayerDiv, updateScoreTable, playersCalculateFinshedRound, newRoundDealing };


