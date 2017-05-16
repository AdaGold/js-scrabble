var Scrabble = function() {};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;


myScrabble = new Scrabble
console.log(myScrabble.helloWorld());


var scoreChart = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
};


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
  return points;
}

// console.log(scoreChart[1].includes("E"));

console.log(score("CAT"));
console.log(score("ZZZ"));
console.log(score("zzZ"));
console.log(score("ZFFHW"));
console.log(score("AAAAAAA"));
console.log(score("aaaaaaa"));


// Letter	Value
// A, E, I, O, U, L, N, R, S, T	1
// D, G	2
// B, C, M, P	3
// F, H, V, W, Y	4
// K	5
// J, X	8
// Q, Z	10
