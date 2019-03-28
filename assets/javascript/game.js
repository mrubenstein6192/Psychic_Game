var winsText = document.getElementById("wins");

var lossesText = document.getElementById("losses");

var lettersAlreadyGuessedText = document.getElementById("guessed-letters");

var userGuessText = document.getElementById("user-guess");

var guessesLeftText = document.getElementById("guesses-left");

var computerGuessText = document.getElementById("computer-guess");

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;
var lettersAlreadyGuessed = [];

//create a function to reset the game
function newGame () {
  lettersAlreadyGuessed.length = 0;
  guesses = 10;
}

document.onkeyup = function(event) {

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

var userGuess = event.key;
//user letter is checked against computer letter//

//conditionals//
//if user letter matches computer letter, add 1 to wins and restart the game//
if (userGuess === computerGuess) {
      wins++;
      alert ("You read the computer's mind! " + computerGuess + " was correct!");
      newGame();
}
    //restart game//

//else if user letter is not computer letter, guesses left decreases by 1, user letter is displayed, and user guesses again//
    else {
      guesses = guesses - 1;
      lettersAlreadyGuessed.push(" " + userGuess);
      //display userGuess on page//
      
    }
    //when guesses = 0, restart game//
    if (guesses === 0) {
      losses++;
      alert("You have failed to read the computer's mind. Try again!");
      newGame();
    }
  
    // Display the user and computer guesses, and wins/losses/ties.//

        winsText.textContent = + wins;
        lossesText.textContent = + losses;
        guessesLeftText.textContent = + guesses;
        lettersAlreadyGuessedText.textContent = "" + lettersAlreadyGuessed;
        userGuessText.textContent = "" + userGuess;
    }
newGame();