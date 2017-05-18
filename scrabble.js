var Scrabble = function() {};

Scrabble.letterValues = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10
};

Scrabble.score = function(word) {
  var letters = word.toLowerCase().split('');
  // console.log(letters);
  var total = 0;
  letters.forEach(function(num) {
    total += Scrabble.letterValues[num];
  });
  if (word.length == 7) {
    total += 50;
  }
  return total;
};

// Scrabble.score("WORD");
//
// var words = ["cat", "RSTCMRS", "word", "zz", "bat", "kkkk", "rstcmrr"];

Scrabble.highestScoringFrom = function(array) {
  highest = array[0];
  i = 0;
  array.forEach(function(word) {
    if (Scrabble.score(word) > Scrabble.score(highest)) {
      highest = array[i];
    } else if (Scrabble.score(word) == Scrabble.score(highest) && word.length < highest.length) {
      highest = array[i];
    }
    i++;
  });
  return highest;
};


var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.tiles = [];
  // this.totalScore = 0;
};

Player.prototype.play = function(word) {
  this.plays.push(word);
};

Player.prototype.totalScore = function() {
  var total = 0;
  this.plays.forEach(function(word) {
    total += Scrabble.score(word);
  });
  return total;
};

Player.prototype.hasWon = function() {
  if ( this.totalScore() > 100 ) {
    return true;
  } else {
    return false;
  }
};

Player.prototype.highestScoringWord = function(){
  return Scrabble.highestScoringFrom(this.plays);
};

Player.prototype.highestWordScore = function(){
  // var word = this.highestScoringWord;
  return Scrabble.score(this.highestScoringWord());
};




// var TileBag = function() {
//
// ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', '' ]
// };
// TileBag.prototype.drawtiles = function(playerTiles) {
//   tilesNeeded = 7 - playerTiles;
//   tiles = [];
//   var keys = this.letters.keys();
//   console.log(this.letters.keys());
//
//   var randomLetter = keys[Math.floor(Math.random() * keys.length)];
//
//   while (this.letters[randomLetter] === 0) {
//     randomLetter = keys[Math.floor(Math.random() * keys.length)];
//   }
//
//   // if (this.letters[randomLetter] !== 0) {
//   tiles.push(randomLetter);
//   this.letter[randomLetter] = this.letter[randomLetter] - 1;
//
//   return tiles;
//
// };

// var TileBag = function() {
//   this.letters = {
//     'e': 12,
//     'a': 9,
//     'i': 9,
//     'o': 8,
//     'n': 6,
//     'r': 6,
//     't': 6,
//     'd': 4,
//     'l': 4,
//     's': 4,
//     'u': 4,
//     'g': 3,
//     'b': 2,
//     'c': 2,
//     'f': 2,
//     'h': 2,
//     'm': 2,
//     'p': 2,
//     'v': 2,
//     'w': 2,
//     'y': 2,
//     'j': 1,
//     'k': 1,
//     'q': 1,
//     'x': 1,
//     'z': 1
//   };
//
// };

// TileBag.prototype.drawtiles = function(playerTiles) {
//   tilesNeeded = 7 - playerTiles;
//   tiles = [];
//   var keys = this.letters
//   console.log(TileBag.getOwnPropertyNames(TileBag.letters);
//
//   var randomLetter = keys[Math.floor(Math.random() * keys.length)];
//
//   while (this.letters[randomLetter] === 0) {
//     randomLetter = keys[Math.floor(Math.random() * keys.length)];
//   }
//
//   // if (this.letters[randomLetter] !== 0) {
//   tiles.push(randomLetter);
//   this.letter[randomLetter] = this.letter[randomLetter] - 1;
//
//   return tiles;
//
// };
//   // }
//   var bag = new TileBag();
//
//   console.log(bag.drawtiles(3));


  // ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ]



// console.log(Scrabble.score("word"));
// console.log(Scrabble.highestScoringFrom(words));

// var game = new Scrabble();
// game.score("word");
// console.log(game.name);


// var jackie = new Player("Jackie");
//
// console.log(jackie.totalScore());
// jackie.play("firstword");
// console.log("you played: " + jackie.plays);
// console.log("your score is now: " + jackie.totalScore());
// jackie.play("cat");
// console.log("you played: " + jackie.plays);
// console.log("your score is now: " + jackie.totalScore());
// jackie.play("sock");
// console.log("you played: " + jackie.plays);
// console.log("your score is now: " + jackie.totalScore());
// jackie.play("Zzzz");


// console.log("The score of 'Zz' is: " + Scrabble.score("Zz"));

// console.log("Highest scoring word is : " + jackie.highestScoringWord());
// console.log(jackie.highestWordScore());
//
// console.log(jackie.hasWon());



// jackie.totalScore();
// console.log(jackie.totalScore());
// console.log(jackie.totalScore);






module.exports = Scrabble;

//
// Create a new Player object. The object should have the following functions:
//
// Constructor: Called when you use new Player(name), sets up an instance with the instance variable name assigned
// name: property which returns the value of the player's name
// plays: property which returns an Array of the words played by the player
// play(word): Function which adds the input word to the plays Array
// Returns false if player has already won
// totalScore(): Function which sums up and returns the score of the players words
// hasWon(): Function which returns true if the player has over 100 points, otherwise returns false
// highestScoringWord(): Function which returns the highest scoring word the user has played
// highestWordScore(): Function which returns the highestScoringWord score



// Create the following functions within the Scrabble module.
//
// score(word): returns the total score value for the given word. The word is input as a string (case insensitive). The chart below shows the point value for a given letter.
// highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
// Note that it’s better to use fewer tiles, so if the top score is tied between multiple words, pick the one with the fewest letters.
// Note that there is a bonus (50 points) for using all seven letters. If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles.
// If the there are multiple words that are the same score and same length, pick the first one in supplied list.
// You should write your own code using the Scrabble module and test the methods manually to ensure they work properly.


// var letterValues = new Object;
//   letterValues['a'] = 1;
//   letterValues['e'] = 1;
//   letterValues['i'] = 1;
//   letterValues['o'] = 1;
//   letterValues['u'] = 1;
//   letterValues['l'] = 1;
//   letterValues['n'] = 1;
//   letterValues['r'] = 1;
//   letterValues['s'] = 1;
//   letterValues['t'] = 1;
//   letterValues['d'] = 2;
//   letterValues['g'] = 2;
//   letterValues['b'] = 3;
//   letterValues['c'] = 3;
//   letterValues['m'] = 3;
//   letterValues['p'] = 3;
//   letterValues['f'] = 4;
//   letterValues['h'] = 4;
//   letterValues['v'] = 4;
//   letterValues['w'] = 4;
//   letterValues['y'] = 4;
//   letterValues['k'] = 5;
//   letterValues['j'] = 8;
//   letterValues['x'] = 8;
//   letterValues['q'] = 10;
//   letterValues['z'] = 10;


// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

// Scrabble.prototype = {
//   score: function(word){
//     var letters = word.split('');
//     console.log(letters);
//     var total = 0;
//     letters.forEach(function(num) {
//       total += letterValues[num];
//     });
//     console.log(total);
//     // total score value for word
//   },
//   highestScoreFrom: function(arrayOfWords) {
//     // the word in array with highest score
//   },
// };
