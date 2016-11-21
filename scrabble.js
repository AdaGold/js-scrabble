var Scrabble = {
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
  z: 10,

  score: function(word) {
    //convert input word to lowercase to that score is not case-senstive
    this.word = word.toLowerCase();

    //iterate through input word
    var letter, i, sum = 0;
    for(i = 0; i < this.word.length; i++) {
      letter = this.word[i];
      //add the number that matches word[i] letter to sum from Scrabble properties
      sum += Scrabble[letter];
    }
    return sum;
  }
};

console.log(Scrabble.score('hippo'));

module.exports = Scrabble;
