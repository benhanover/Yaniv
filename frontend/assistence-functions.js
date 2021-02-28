function hidWelcomePage() {
  const form = catchElement("form-background");
  form.style.display = "none";
}

function randomOrderArray(arr) {
  let newArr = [];
  while (arr.length > 0) {
    let index = Number(Math.round(Math.random() * (arr.length - 1)));
    newArr.push(...arr.splice(index, 1));
  }
  return newArr;
}

function catchElement(id) {
  const x = document.getElementById(id);
  return x;
}

function newElement(element, className, content, appendTo, id) {
  const x = document.createElement(element);
  x.classList.add(className);
  x.setAttribute("id", id);
  x.innerText = content;
  appendTo.append(x);
  return x;
}

// messing around
function guessACard() {
  const deck = new TableDeck();
  deck.shuffle();
  const player = new Player([], "Danks", "male");

  player.drawTableCard(deck.drawCard());
  console.log(player.playerDeck[0]);
}

// returns the checked avatar
function getCheckedAvatar() {
  const allAvatars = document.getElementsByName("avatar");
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
}

function createPlayerPositions(players) {
  const possiblePositions = [
    "current-player",
    "left-player",
    "top-player",
    "right-player",
  ];
  if (players.length === 2) {
    return [possiblePositions[0], possiblePositions[2]];
  } else if (players.length === 3) {
    return [possiblePositions[0], possiblePositions[1], possiblePositions[2]];
  }
  return possiblePositions;
}

export {
  guessACard,
  newElement,
  catchElement,
  randomOrderArray,
  hidWelcomePage,
  getCheckedAvatar,
  createPlayerPositions,
  switchTurn,
};

