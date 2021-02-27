// MOVE
 function hidWelcomePage(){
    const form = catchElement("form-container");
    form.hidden = true;
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


export { guessACard , newElement , catchElement, randomOrderArray ,  hidWelcomePage , getCheckedAvatar };