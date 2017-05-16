var Scrabble = function() {};

var scoreChart = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
};

var arrayOfWords = [];

Scrabble.prototype.score = function(word) {
  word = word.toUpperCase();
  var points = 0;
  if (word.length == 7){
    points += 50;
  }
  for (var i = 0, len = word.length; i < len; i++) {
      points += scoreChart[word[i]];
    }
  arrayOfWords.push(word)
  return points;
}

 Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var highestScoringWord;
  var highestScore = 0;
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (this.score(arrayOfWords[i]) > highestScore) {
      highestScoringWord = arrayOfWords[i];
      highestScore = this.score(arrayOfWords[i]);
    } else if (this.score(arrayOfWords[i]) == highestScore) {
      if (highestScoringWord.length == 7) {
      } else if (arrayOfWords[i].length == 7) {
        highestScoringWord = arrayOfWords[i];
        highestScore = this.score(arrayOfWords[i]);
      } else if (arrayOfWords.length < highestScoringWord.length){
        highestScoringWord = arrayOfWords[i];
        highestScore = this.score(arrayOfWords[i]);
      }
    }
  }
  return highestScoringWord;
}


Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;

myScrabble = new Scrabble();
console.log(myScrabble.helloWorld());
//
console.log(myScrabble.score("CAT"));

console.log(myScrabble.score("DOG"));

console.log(myScrabble.score("ZZZZZZ"));

console.log(myScrabble.score("AAAAADC"));

console.log(myScrabble.highestScoreFrom([ "AAAAACD", "QQQQQQQ", "ZZZZZZ"]));


var Player = function() {};
