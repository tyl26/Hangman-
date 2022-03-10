let words = [
  'cyberpunk',
  'nightcity',
  'dystopia',
  'steampunk',
  'javascript',
  'futurist',
  'intelligence',
  'computer',
  'akira',
  'anime',
  'japan',
  'literature',
  'cybernetic',
  'dune',
  'panda',
  'antivirus',
];

let numTries = 6;
let maxTries = '';
let underScore = [];
let wrong = [];

//Generate a random word from the provided array list.
let randomWords = words[Math.floor(Math.random() * words.length)];

//For testing purposes.
console.log(randomWords);

let startBtn = document.getElementById('startGameBtn').addEventListener('click', function () {
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
  }

  startGame();
  placeUnderscore();
});

//Function that sets underscore for each letter in the random word.
function placeUnderscore() {
  for (let i = 0; i < randomWords.length; i++) {
    underScore.push('_');
    document.getElementById('guessWord').innerText = underScore;
    document.getElementById('instruction').innerHTML = 'Enter a letter to find the secret password';
  }
}

//Function that listens for user's input.
window.addEventListener('keypress', (event) => {
  let keyCode = event.keyCode;
  let guessedLetter = String.fromCharCode(keyCode);

  if (maxTries === 6) {
    return false;
  }

  //Function that responds to the wrong guess.
  if (randomWords.indexOf(guessedLetter) === -1) {
    wrong.push(guessedLetter);
    document.getElementById('wronglet').innerHTML = wrong;
    document.getElementById('maxTries').innerHTML = maxTries;

    maxTries++;
    lost();
    uppdateHangman();
  }

  //For every correct guess.
  for (let e = 0; e < randomWords.length; e++) {
    if (randomWords[e] === guessedLetter) {
      underScore[e] = guessedLetter;
      underScore[randomWords.indexOf(guessedLetter)] = guessedLetter;
      document.getElementById('guessWord').innerHTML = underScore;

      win();
    }
  }
});

//This is what happens when the user looses.
function lost() {
  if (maxTries === numTries) {
    document.getElementById('maxTries').innerHTML = maxTries;
    document.getElementById('guessWord').innerHTML = ' Oops we lost our man!' + 'The word was' + ' ' + randomWords;
    document.getElementById('playAgain').style.display = 'block';
    document.getElementById('instruction').style.display = 'none';
    const wrongGuess = document.getElementById('welcomeScreen');
    wrongGuess.classList.toggle('wrong');
  }
}

//If the user wins.
function win() {
  if (underScore.indexOf('_') === -1) {
    document.getElementById('guessWord').innerHTML = 'Yaay you saved our man! The word was' + ' ' + randomWords;
    document.getElementById('playAgain').style.display = 'block';
    document.getElementById('instruction').style.display = 'none';
    const correctGuess = document.getElementById('welcomeScreen');
    correctGuess.classList.toggle('correct');
  }
}

//Function to update the svg figure and draw parts of the body.
function uppdateHangman() {
  if (maxTries === 2) {
    document.getElementById('scaffold').style.display = 'block';
  }
  if (maxTries === 3) {
    document.getElementById('head').style.display = 'block';
  }
  if (maxTries === 4) {
    document.getElementById('body').style.display = 'block';
  }
  if (maxTries === 5) {
    document.getElementById('arms').style.display = 'block';
  }
  if (maxTries === 6) {
    document.getElementById('legs').style.display = 'block';
  }
}

//Refresh page when player clicks on Play Again button.
document.getElementById('playAgain').addEventListener('click', function restart() {
  window.location.href = '../index.html';
});
