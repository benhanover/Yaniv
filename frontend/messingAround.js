// need to add joker functionality
// fix unchoose option
// fix un syncronized selections
// 
// consecutive numbers- 
//  put all cards ranks in array and look for index
//  

function checkValidChoose(card, cardElement) {
    // check if the click was on a chosen card
    if (card.chosen) {
        card.chooseToggle(cardElement);
        return false;
    }
    chosenCards = Array.from(document.querySelectorAll('.chosen'));
    if (chosenCards.length === 0) {
        return true;
    } else if (chosenCards.length === 1) {
        return validationCaseOne(chosenCards, card);
    } else if (chosenCards.length === 2) {
        return validationCaseTwo(chosenCards, card);
    } else if (chosenCards.length === 3) {
        return validationCaseThree(chosenCards, card);
    } else {
        return validationCaseFour(chosenCards, card);
    }
}
// true
// - same id
// - continue to be consectuive numbers with the same sign

function validationCaseOne(chosenCards, card) {
    // same rank
    if (card.rank === chosenCards[0].rank) {
        return true;
        // consecutive numbers with the same sign
    } else if ((
        card.id === chosenCards[0].id + 1 ||
        card.id === chosenCards[0].id - 1) &&
        card.suit === chosenCards[0].suit) {
        return true;
    } else {
        return false;
    }
}
// // true
//   - same id
//   - continue to be consectuive numbers with the same sign

function validationCaseTwo(chosenCards, card) {
    // if the user clicked on two cards with the same number
    if (chosenCards[0].rank === chosenCards[1].rank) {
        // if the card is the same number as the other two chosens
        if (card.rank === chosenCards[0].rank) {
            return true;
        } else {
            return false;
        }
        // the two chosen cards are same suit and consecutive
    } else {
        // card has the same suit as the other two
        if (card.suit === chosenCards[0].suit) {
            // card is continuing consecutive numbers
            if (
                card.id === chosenCards[0].id + 1 ||
                card.id === chosenCards[0].id - 1 ||
                card.id === chosenCards[1].id + 1 ||
                card.id === chosenCards[1].id - 1
            ) {
                return true;
            }
        } else {
            return false;
        }
        return false;
    }

}

// true
// - same id
// - continue to be consectuive numbers with the same sign

function validationCaseThree(chosenCards, card) {
    // enough to know that the third one is also equal 
    if (chosenCards[0].rank === chosenCards[1].rank) {
        if (card.rank === chosenCards[0].rank) {
            return true;
        } else {
            return false;
        }
        // the cards selected are for sure a set of consecutive cards
    } else {
        // check if the card has the same suit
        if (card.suit === chosenCards[0].suit) {
            if (
                card.id === chosenCards[0].id + 1 ||
                card.id === chosenCards[0].id - 1 ||
                card.id === chosenCards[1].id + 1 ||
                card.id === chosenCards[1].id - 1 ||
                card.id === chosenCards[2].id + 1 ||
                card.id === chosenCards[2].id - 1
            ) {
                return true;
            }
        } else {
            return false;
        }
        return false;
    }
}
// true
// - same id
// - continue to be consectuive numbers with the same sign

function validationCaseFour(chosenCards, card) {
    // the chosen cards must be consectiutive numbers with the same sign
    if (card.suit === chosenCards[0].suit) {
        if (
            card.id === chosenCards[0].id + 1 ||
            card.id === chosenCards[0].id - 1 ||
            card.id === chosenCards[1].id + 1 ||
            card.id === chosenCards[1].id - 1 ||
            card.id === chosenCards[2].id + 1 ||
            card.id === chosenCards[2].id - 1 ||
            card.id === chosenCards[3].id + 1 ||
            card.id === chosenCards[3].id - 1
        ) {
            return true;
        } else {
            return false;
        }
    } return false;
}


function validationCaseFour(chosenCards, card) {
    let chosenCardsPossible = chosenCards;
    for (let i = 0; i <)
        for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}   for (let i = 0; i <)
    for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
} for (let i = 0; i <)
}