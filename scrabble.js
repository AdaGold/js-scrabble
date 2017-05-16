var Scrabble = function() {};

var scoreChart = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
};

var arrayOfWords = [];

var score = function(word) {
  word = word.toUpperCase();
  var points = 0;
  if (word.length >= 7){
    points += 50;
  }
  for (var i = 0, len = word.length; i < len; i++) {
    switch (true) {
      case scoreChart[1].includes(word[i]):
        points += 1;
        break;
      case scoreChart[2].includes(word[i]):
        points += 2;
        break;
      case scoreChart[3].includes(word[i]):
        points += 3;
        break;
      case scoreChart[4].includes(word[i]):
        points += 4;
        break;
      case scoreChart[5].includes(word[i]):
        points += 5;
        break;
      case scoreChart[8].includes(word[i]):
        points += 8;
        break;
      case scoreChart[10].includes(word[i]):
        points += 10;
        break;
    }
  }
  arrayOfWords.push(word)
  // console.log(arrayOfWords)
  return points;
}

var highestScoreFrom = function(arrayOfWords) {
  var highestScoringWord;
  var highestScore = 0;
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (score(arrayOfWords[i]) > highestScore) {
      highestScoringWord = arrayOfWords[i];
      highestScore = score(arrayOfWords[i]);
    } else if (score(arrayOfWords[i]) == highestScore) {
      if (highestScoringWord.length == 7) {
        return highestScoringWord;
      } else if (arrayOfWords[i].length == 7) {
        highestScoringWord = arrayOfWords[i];
        highestScore = score(arrayOfWords[i]);
      } else if (arrayOfWords.length < highestScoringWord.length){
        highestScoringWord = arrayOfWords[i];
        highestScore = score(arrayOfWords[i]);
      }
    }
  }
  return highestScoringWord;
}

// console.log(highestScoreFrom(["CAT", "DOG", "AAAAAA", "AAAAD" ]));

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;

myScrabble = new Scrabble;

console.log(myScrabble.helloWorld());
