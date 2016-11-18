'use strict';

var Scrabble = function() {};
// ####################################
// ####### SCORING/ WORD parsing ######
// ####################################

Scrabble.prototype.splitWord = function(word) {
  // add some data validation here later
  var wordString = word.toUpperCase();
  var letterArray = Array.from(wordString);
  return letterArray;
}

Scrabble.prototype.score = function(word) {
  // pass in splitWord
  var letters = this.splitWord(word);
  var wordScore = 0;
  // loop over each element in letters
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    // assign a score to letter
    var score = this.letterScores[letter];
    // add score to running total
    wordScore += score;

  }
  // return score for word
  return wordScore;

}

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var highScore = 0;
  var bigScoreWord = null; 

  for (var i = 0; i < arrayOfWords.length; i++) {

    var word = arrayOfWords[i];
    var currentWordScore = this.score(word);

    if (currentWordScore == highScore){
      if (word.length == 7 && bigScoreWord.length != 7){
        bigScoreWord = word;
        // if there is a word that uses all seven tiles award that word an additional 50 pts
        highScore = currentWordScore + 50;
         // if there is a tie, prefer the highest scorring word made with the fewest tiles
      } else if (word.length < bigScoreWord.length) {
        bigScoreWord = word;
        highScore = currentWordScore; 
      }
    }

    if (currentWordScore > highScore)  {
      highScore = currentWordScore;
      bigScoreWord = word;
    }
    
  }
  // this returns the score of highest scoring word played in the game
  return bigScoreWord;


}


// // chose to use object as these are not so much returning a actions as being acted upon
// you need the semicolon for object literals
Scrabble.prototype.letterScores = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5, 
  J: 8, X: 8,
  Q: 10, Z: 10 // NO SEMICOLON!
};
// ####################################
// ####### PLAYER OBJECT & FXNS  ######
// ####################################
var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.playerScrabble = new Scrabble;
  // this.bigScoreWord = null;
  // this.highestWordScore = 0;
  // this.tiles = [];
}

Player.prototype.play = function (word) {
  if (this.hasWon() == true) {
    console.log("You Won!");
    return false;
  } else {
    this.plays.push(word);
    return true;
  }

};

Player.prototype.hasWon = function(){
  // TODO jm-rives finsih later
  if (this.totalScore() >= 100) {
    return true;
  } else {
    return false;
  }
  
};

Player.prototype.totalScore = function () {
  var newScrabble = new Scrabble();
  var runningScore = 0;
  // sums the score of players words
  for (var i = 0; i < this.plays.length; i++) {
     var word = this.plays[i];
     var currentWordScore = newScrabble.score(word);
     runningScore += currentWordScore;
  }
  return runningScore;

}
// this returns the highest scoring word of a single player
Player.prototype.highestScoringWord = function() {
  var highScore = 0;

  // I don't think this is going to eventually be an array?
  // Variables with singular names usually aren't arrays
  var highestScoringWord = null; // this should be an array element of type string

  
  for (var i = 0; i < this.plays.length; i++) {

    var word = this.plays[i];
    var currentWordScore = this.playerScrabble.score(word);

    if (currentWordScore == highScore){
      if (word.length == 7 && highestScoringWord.length != 7){
        highestScoringWord = word;
        // if there is a word that uses all seven tiles award that word an additional 50 pts
        // highScore = currentWordScore + 50;
         // if there is a tie, prefer the highest scorring word made with the fewest tiles
      } else if (word.length < highestScoringWord.length) {
        highestScoringWord = word;
        // highestScoringWord = currentWordScore; 
      }
    }

    if (currentWordScore > highScore)  {
      highScore = currentWordScore;
      highestScoringWord = word;
    }
    
  }
  // this returns the score of highest scoring word played in the game

  // Your comment above says this returns a score, but this
  // variable isn't a number
  return highestScoringWord;

}

// What does this function do? Write a comment here.
// What is the type of highestScoringWord? Document it here.
Player.prototype.highestWordScore = function() {
  var playerScrabble = new Scrabble();
  // // // var bestWordScore = this.playerScrabble.score(highestScoringWord);
  // return highestWordScore;

  // so if highestScoringWord is a string, this will return
  // the score for that word.
  return playerScrabble.score(this.highestScoringWord());
}


// ########### TESTING CODE ##########
var wordSeven = "jejunum";
var wordThree = "wee";
var oneScrabble = new Scrabble();
var arrayWords = ["Ty", "Bacon", "piecrust", "tea", "eiecrust", "zqzqzqz"];

// ########### Scrabble TESTING CODE ##########
console.log("Scrabble TESTING CODE");
console.log(oneScrabble.score(wordSeven));
console.log(oneScrabble.score(wordThree));
console.log("##### This is Line 187")
console.log(oneScrabble.highestScoreFrom(arrayWords));

// ########### Player TESTING CODE ##########
console.log("Player TESTING CODE");
var myPlayer = new Player("Smokey");
myPlayer.play("bacon");
myPlayer.play("bacon");
myPlayer.play("bacon");
myPlayer.play("zqzqzqzzqzq");
console.log(myPlayer.totalScore());
console.log(myPlayer);
console.log("########")
console.log("Player highest scoring word " + myPlayer.highestScoringWord(arrayWords));
console.log("Player highest word score " + myPlayer.highestWordScore());
console.log("Has the player won? " + myPlayer.hasWon());

// var myScrabble = new Scrabble();

// do stuff here to test

module.exports = Scrabble; // take the whole scrabble class so it can be used by other files (What do you want to be visible outside the module)
