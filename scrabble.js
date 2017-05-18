// HELPER METHODS
var scoreChart = {
  A: 1, E: 1, I: 1, O: 1, U: 1,
  L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2, B: 3, C: 3, M: 3,
  P: 3, F: 4, H: 4, V: 4, W: 4,
  Y: 4, K: 5, J: 8, X: 8, Q: 10,
  Z: 10
};

var arrayOfWords = [];

var scoreHelper = function (word) {
  word = word.toUpperCase();
  var points = 0;
  if (word.length == 7){
    points += 50;
  }
  for (var i = 0, len = word.length; i < len; i++) {
      points += scoreChart[word[i]];
    }
  return points;
};

var highestScoringWordHelper = function(arrayOfWords) {
  var highestScoringWord;
  var highestScore = 0;
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (scoreHelper(arrayOfWords[i]) > highestScore) {
      highestScoringWord = arrayOfWords[i];
      highestScore = scoreHelper(arrayOfWords[i]);
    } else if (scoreHelper(arrayOfWords[i]) == highestScore) {
      if (highestScoringWord.length == 7) {
      } else if (arrayOfWords[i].length == 7) {
        highestScoringWord = arrayOfWords[i];
        highestScore = scoreHelper(arrayOfWords[i]);
      } else if (arrayOfWords.length < highestScoringWord.length){
        highestScoringWord = arrayOfWords[i];
        highestScore = scoreHelper(arrayOfWords[i]);
      }
    }
  }
  return highestScoringWord;
};

var highestWordScoreHelper = function (arrayOfWords) {
  var word = highestScoringWordHelper(arrayOfWords);
  return scoreHelper(word);
};

// SCRABBLE METHODS


var Scrabble = function() {
  this.arrayOfWords = [];
};

Scrabble.prototype.score = function(word) {
  this.arrayOfWords.push(word);
  return scoreHelper(word);
};


Scrabble.prototype.highestScoreFrom = function() {
  return highestScoringWordHelper(this.arrayOfWords);
};


Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

// PLAYER METHODS

var Player = function (name, game) {
  this.name = name;
  this.playerWords = [];
  this.game = game;
};

Player.prototype.plays = function () {
  console.log("My turn!");
};


// refactor to include a save word to game method
Player.prototype.play = function (word) {
  if (this.hasWon()) {
    return console.log("Cannot play that word", this.name, "has already won!");
  } else {
    this.playerWords.push(word);
    this.saveWordToGameWordArray(word);
    console.log(this.playerWords);
  }
};


Player.prototype.saveWordToGameWordArray = function (word) {
  this.game.arrayOfWords.push(word);
}

Player.prototype.totalScore = function () {
  var playerScore = 0;
  var scrabble = new Scrabble();
  for (var i = 0; i < this.playerWords.length; i++) {
  playerScore += scrabble.score(this.playerWords[i]);
  }
  return playerScore;
};

Player.prototype.hasWon = function () {
  if (this.totalScore() >= 100) {
    return true;
  } else {
    return false;
  }
};

Player.prototype.highestScoringWord = function () {
  return highestScoringWordHelper(this.playerWords);
};

Player.prototype.highestWordScore = function () {
  return highestWordScoreHelper(this.playerWords);
};


module.exports = Scrabble;

myScrabble = new Scrabble();

p = new Player("Kelly", myScrabble);
q = new Player("Kevin", myScrabble);

console.log(p.name);
console.log(q.name);


// p.plays();
// p.play("Hello");
// p.play("World");
// console.log(p.totalScore());
// p.play("cat");
// console.log(p.totalScore());
// p.play("ZZZZZ");
// console.log(p.totalScore());
// p.play("AA");
// console.log(p.totalScore());
// p.play("ZZZZZ");
// console.log(p.totalScore());
p.play("Hello");
p.play("WorldZ");
// p.play("ZZZZZZZ");
// console.log(p.highestScoringWord());
// console.log(p.highestWordScore());
q.play("Hello");
q.play("world");
console.log(q.totalScore());
console.log(myScrabble.helloWorld());
console.log(myScrabble.score("cat"));
console.log(myScrabble.highestScoreFrom());
