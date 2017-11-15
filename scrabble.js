const LETTERVALUES = {
  A: 1,
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
  Z: 10,
};

const Scrabble = {
  score(word) {
    if (word.length > 7 || word.length < 1) {
      throw new Error('word must be between 1 and 7 letters');
    }

    let wordArray = word.toUpperCase().split('');
    // let sum;
    // (wordArray.length == 7) ? sum = 50 : sum = 0;
    let sum = (wordArray.length === 7) ? 50 : 0;
    wordArray.forEach((letter) => {
      if (letter in LETTERVALUES) {
        sum += LETTERVALUES[letter];
      } else {
        throw new Error('word contains invalid characters');
      }
    });

    return sum;
  },


};

console.log(Scrabble.score('win'));

Scrabble.Player = class {
  // TODO: implement the Player class
};

module.exports = Scrabble;
