'use strict';

var Scrabble = function() {};

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
  var highestScoringWord = null; // using 0 should I use null instead?

  for (var i = 0; i < arrayOfWords.length; i++) {

    var word = arrayOfWords[i];
    var currentWordScore = this.score(word);

    if (currentWordScore == highScore){
      if (word.length == 7 && highestScoringWord.length != 7){
        highestScoringWord = word;
        // if there is a word that uses all seven tiles award that word an additional 50 pts
        highScore = currentWordScore + 50;
         // if there is a tie, prefer the highest scorring word made with the fewest tiles
      } else if (word.length < highestScoringWord.length) {
        highestScoringWord = word;
        highScore = currentWordScore; 
      }
    }

    if (currentWordScore > highScore)  {
      highScore = currentWordScore;
      highestScoringWord = word;
    }
    
  }
  return highestScoringWord;
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

var wordSeven = "jejunum";
var wordThree = "wee";
var oneScrabble = new Scrabble();
var arrayWords = ["Ty", "Bacon", "piecrust", "tea", "eiecrust"];

console.log(oneScrabble.score(wordSeven));
console.log(oneScrabble.score(wordThree));
console.log(oneScrabble.highestScoreFrom(arrayWords));



// var myScrabble = new Scrabble();

// do stuff here to test

module.exports = Scrabble; // take the whole scrabble class so it can be used by other files (What do you want to be visible outside the module)
