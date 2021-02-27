function sivuv() {
    setTimeout(() => {
        flag = false;
    }, 5000);
    while (flag) {
        console.log("im in the while");
    }

    while (gameControl.players.length > 1) {
        let flag = true;
        await sivuv(gameControl.players);
        console.log("im in the while");


        // gameControlUpdate(players)
        // //   -optional removePlayers();
        // scoreUpdate(players);
        // showScore();