


//  tasks
    //   1 - create basic deck class with only draw top card method
    //   2   - create tableDeck: - constructor, shuffle, dealCards and inherit drawTopCard
    //   3   - pileDeck - method: transition to tableDeck and inherit drawTopCard
    //   4 - player class diffuclty level its over 9000 !!!!
    //          -   drawTableCard
    //          -   drawPileCard
    //          -   throwCards(1card,2cards,3cards,4cards,seria)
    //          -   Yaniv
    //          -   (stickCard)
    












// what is this? why all of the page is comment?



// Use Class name 'Card' with properties 'suit': (Spade, Heart, Club, Diamond), 'rank'(A, 1-10, J, Q, K), 'isJocker'(true, false).

// button 

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

// }; // Deck => playerDeck TableDeck', 'PileDeck'for each player
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

// function removePlayer(player) {
    
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
    
     
      
   
      
    
      
      
        // - Cards
        // - props => (rank, suit, isJoker, value); 
        // - methods => getters    
class Card {
  constructor(suit, rank, value, isJoker, hidden){
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    this.isJoker = isJoker;
  }

  CardName() {
    return `${this.rank}${this.suit} `;
  }
  get CardValue() {
    return this.value ;
  }
  get IsJoker(){
    return this.isJoker;
  } 
}

// - Deck 
      //   - props => [Cards];
      //   - methods => shuffle, dealCards, dealFirstCard
class Deck {
  
  constructor (){
    this.cards = [];
    const signs = ['heart','club', 'diamond', 'spade'];
    const ranksAndValues =[['Ace',1], ['2',2], ['3',3], ['4' ,4], ['5',5], ['6',6], ['7',7], ['8',8], ['9',9], ['10',10], ['Jack',10], ['Queen',10], ['King',10]];
    for (const sign of signs) {
      for (const rankAndVal of ranksAndValues) {
        this.cards.push(new Card(sign,rankAndVal[0],rankAndVal[1],false));
      }

    }
    this.cards.push(new Card("Joker","BlackJoker",0,true));
    this.cards.push(new Card("Joker","RedJoker",0,true));
  
  }
  

  shuffle() {
    let newCardsArray = [];
    for(let i = 0 ; i < 54 ; i++) {
      let index = Math.round(Math.random()*(this.cards.length-1));
      newCardsArray.push(this.cards[index]);
      this.cards.splice(index , 1);
    } 
    this.cards =  newCardsArray;     
    }


    dealCards() {
        const fiveCards =  this.cards.splice(0,5);
        return fiveCards;
    }

    drawCard() {
        const topCard =  this.cards.splice(0,1);
        return topCard;
    }
}



class Player {
  constructor(playerdeck, name, score, genderAvatar) {
      this.playerDeck = playerdeck;
      this.name = name;
      this.score = score;
      this.genderAvatar = genderAvatar;
    }
    // - Player 
    //   - props => playerDeck, name, score, genderAvatar
    //   - methods => drawTableCard, drawPileCard, throwCards(1card,2cards,3cards,4cards,seria), Yaniv, (stickCard)
    //   - 
      drawTableCard(deck) {
        const newCard = deck.drawCard();
        return newCard;
      }
      drawPileCard(pileDeck) {
        const newCard = pileDeck.drawCard();
        return newCard;
      } 
}
// const deck = new Deck();
// console.log(deck);
// deck.Shuffle();
// deck.Bla();
// // console.log(deck[0].CardName());
// console.log(deck.cards);

let deck = new Deck();
deck.shuffle();
player1 = deck.dealCards();
player2 = deck.dealCards();
player3 = deck.dealCards();
player4 = deck.dealCards();
console.log(deck);

















  // OBJECTS-
      //   - BOARD 
      //   - (Reminders of cards) Deck => ([cards]);
      //   - PileDeck => ([cards]);


      