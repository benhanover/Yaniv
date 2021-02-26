export function playersScore(players){
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

class Winner {
    constructor(name,score){
        this.name = name ;
        this.score = score ;
    }
}