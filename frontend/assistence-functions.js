// MOVE
function hidWelcomePage() {
    const form = catchElement("form-background");
    form.style.display = 'none';

}


// MOVE
function randomOrderArray(arr) {
    let newArr = [];
    while (arr.length > 0) {
        let index = Number(Math.round(Math.random() * (arr.length - 1)));
        newArr.push(...arr.splice(index, 1));
    }
    return newArr
}
//move
function catchElement(id) {
    const x = document.getElementById(id);
    return x;
}
// MOVE 
function newElement(element, className, content, appendTo, id) {
    const x = document.createElement(element);
    x.classList.add(className);
    x.setAttribute("id", id);
    x.innerText = content;
    appendTo.append(x);
    return x;
}

// messing around MOVE
function guessACard() {
    const deck = new TableDeck();
    deck.shuffle();
    const player = new Player([], "Danks", 'male');

    player.drawTableCard(deck.drawCard());
    console.log(player.playerDeck[0]);
}

// returns the checked avatar MOVE
function getCheckedAvatar() {
    const allAvatars = document.getElementsByName('avatar');
    for (const avatar of allAvatars) {
        if (avatar.checked) {
            return avatar.value;
        }
    }
}
function switchTurn(gameControl) {
    const players = gameControl.players;
    const playerTurnIndex = players.findIndex((player) => { return player.turn === true });
    players[playerTurnIndex].turn = false;
    if (playerTurnIndex === players.length - 1) {
        players[0].turn = true;
    } else {
        players[playerTurnIndex + 1].turn = true;
    }
    console.log(players);
}


export { guessACard, newElement, catchElement, randomOrderArray, hidWelcomePage, getCheckedAvatar, switchTurn };