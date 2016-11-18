var Scrabble = function() {};



 var points = {A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
}


Scrabble.prototype.score = function(word) {
  var score = 0;
  var tiles = 0;

  var letterArray = word.toUpperCase().split("");

    for (let i of letterArray ){
      score += points[i];
      tiles += 1
    };
    if(tiles == 7){
      score += 50;
    };
     return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var wordHash = {};
  for (let i of arrayOfWords) {
    wordHash[i] = this.score(i);
    var word = Object.values(wordHash)
    console.log(word, this.score(i));
    if (word.length != word.length) {
    return word.key(word.max);
  }
  }
};

module.exports = Scrabble;

var socks = new Scrabble
socks.highestScoreFrom(["binding", "boy", "hunt"])
