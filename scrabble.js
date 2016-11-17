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


  }

  // var wordSeven = "jejunum"

  // // chose to use object as these are not so much returning a actions as being acted upon

  var letterValues = new Object();

  letterValues.score_one = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  letterValues.score_two = ["D", "G"];
  letterValues.score_three = ["B", "C", "M", "P"];
  letterValues.score_four = ["F", "H", "V", "W", "Y"];
  letterValues.score_five = ["K"];
  letterValues.score_eight = ["J", "X"];
  letterValues.score_ten = ["Q", "Z"];

  // console.log('within main function W00t! W00t!');

  console.log(splitWord("banna"));
}

// console.log(Scrabble.letterValues.score_one);
console.log('after main function')

var myScrabble = new Scrabble();

// do stuff here to test

module.exports = Scrabble;
