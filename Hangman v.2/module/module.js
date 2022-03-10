function startGame() {
    //Hide the contents of the welcomeScreen.
    const gameContainer = document.getElementById('startGameContainer');
    gameContainer.classList.toggle('hideContent');

    //Show the hidden numberOfTries parameter.
    const tries = document.querySelector('.stats_container');
    tries.classList.toggle('revealTries');

    //Set the default number of tries a player has.
    document.getElementById('numberOfTries').innerHTML = numTries;

    //Expand welcome screen panel.
    const keyPanel = document.getElementById('welcomeScreen');
    keyPanel.classList.toggle('expanded');

    startGame();
  placeUnderscore();

}

export{startGame}