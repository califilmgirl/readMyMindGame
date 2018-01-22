//global variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft, randomLetter;

//main functions
resetGame();
display();

//generate random letter to compare to user guess
document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === randomLetter) {
    win();
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}

//display and update webpage with results
function display() {
  document.getElementById("wins").innerHTML= "Wins: " + wins;
  document.getElementById("losses").innerHTML= "Losses: " + losses;
  document.getElementById("guessesLeft").innerHTML= "Guesses Left: " + guessesLeft;
  }

//functions to track wins and losses and attempts remaining
function win() {
  wins++;
  resetGame();
  }

function lost() {
  losses++;
  resetGame();
  }

function fail(letter) {
  guessesLeft--;
  }

function resetGame() {
  guessesLeft = 10;
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  }
