'use strict';
console.log("before main function")

var Scrabble = function() {

  var splitWord = function(word) {
    // add some data validation here later
    var wordString = word.toUpperCase();
    var letterArray = Array.from(wordString);
    return letterArray;
  }

  var score = function(word) {
    // pass in splitWord
    var lettersToScore = splitWord(word);
    // loop over each element in lettersToScore
    for (var i = 0; i < lettersToScore.length; i++) {


    }
    // compare each element in splitWord against letterValues object
    // assign a score to letter
    // add score to running total
    // return score for word

  }

  // var wordSeven = "jejunum"

  // // chose to use object as these are not so much returning a actions as being acted upon

  // you need the semicolon for object literals
  var letterScores = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5, 
    J: 8, X: 8,
    Q: 10, Z: 10 // NO SEMICOLON!
  };

  

  var letter = "K";

  var score = letterScores[letter];

  console.log(score);

  // letterValues.score_one = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  // letterValues.score_two = ["D", "G"];
  // letterValues.score_three = ["B", "C", "M", "P"];
  // letterValues.score_four = ["F", "H", "V", "W", "Y"];
  // letterValues.score_five = ["K"];
  // letterValues.score_eight = ["J", "X"];
  // letterValues.score_ten = ["Q", "Z"];

  // console.log('within main function W00t! W00t!');

  console.log(splitWord("banna"));
}

// console.log(Scrabble.letterValues.score_one);
console.log('after main function')

var myScrabble = new Scrabble();

// do stuff here to test

module.exports = Scrabble;
