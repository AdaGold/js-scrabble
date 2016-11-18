var Scrabble = function() {
};

Scrabble.prototype.score = function (word) {
  this.word = word.toLowerCase().split("");
  var score = 0;
  for (var i = 0; i < this.word.length; i++) {
    switch (this.word[i]) {
      case "a": case "e": case "i": case "o": case "u": case "l": case "n": case "r": case "s": case "t":
      score = score + 1;
      break;
      case "d": case "g":
      score = score + 3;
      break;
      case "b": case "c": case "m": case "p":
      score = score + 1;
      break;
      case "f": case "h": case "v": case "w": case "y":
      score = score + 4;
      break;
      case "k":
      score = score + 5;
      break;
      case "j": case "x":
      score = score + 8;
      break;
      case "q": case "z":
      score = score + 10;
      break;
      default:
      score = score;
    }
  }
  return score;
};

Scrabble.prototype.highestScoreFrom = function (arrayOfWords) {
  var arrayOfScores = [];
  var self = this; // required since will be used inside other function
  arrayOfWords.forEach(function(word) {
    var ScoreFromWord = self.score(word);
    arrayOfScores.push(ScoreFromWord);
  });
  //maybe add arrayOfScores.sort() if I have time to refactor
  var highest = 0,
      index = 0;
  for (var i = 0; i < arrayOfScores.length; i++) {
    if (arrayOfScores[i] > highest) {
      highest = arrayOfScores[i];
      index = i;
    }
  }
  return arrayOfWords[index];
};


var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  if ( this.hasWon == true) {
    return false;
  } else {
    this.plays.push(word);
    var wordScore = new Scrabble();
    var wordScores = wordScore.score(word);
    return wordScores;
  }
};

Player.prototype.hasWon = function() {
  if (this.total_score > 100) {
    return true;
  } else {
    return false;
  }
};

Player.prototype.totalScore = function() {
  var scoreSum = 0;
  var scrabbleGame = new Scrabble();
  this.plays.forEach(function(word) {
    var score = scrabbleGame.score(word);
    scoreSum = scoreSum + score;
  });
  return scoreSum;
};

Player.prototype.highestScoringWord = function () {
  if (this.plays.length == 0) {
    return "No words played";
  } else {
    var otherScrabbleGame = new Scrabble();
    var highest = otherScrabbleGame.highestScoreFrom(this.plays);
    return highest;
  }
};

Player.prototype.highestWordScore = function () {
  if (this.plays.length == 0) {
    return 0;
  } else {
    var otherScrabbleGame = new Scrabble();
    var highestScore = otherScrabbleGame.score(this.highestScoringWord());
    return highestScore;
  }
};

//testing that it all works
var hello = new Scrabble();
var words = ["cat", "dog", "platypus"]
var hey = hello.highestScoreFrom(words);
console.log(hey);

var player = new Player("Yeni");
var stuff = player.play("cat");
var otherStuff = player.play("dog");
var otherOtherStuff = player.play("platypus");
var total = player.totalScore();
var word = player.highestWordScore();
console.log("player name is " + player.name);
console.log("player plays are " + player.plays);
console.log("total is " + total);
console.log("winning score is " + word);


module.exports = Scrabble;
