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

  highestScoreFrom(wordsArray) {
    if (wordsArray.length === 0 || wordsArray.constructor !== Array) {
      throw new Error('no words to compare score');
    }
    let scores = wordsArray.map(word => this.score(word));
    let maxIndex = 0;
    let max = scores[0];
    let winningWord = wordsArray[0];
    for (let i = 0; i < wordsArray.length; i += 1) {
      if (scores[i] > max) {
        max = scores[i];
        winningWord = wordsArray[i];
        maxIndex = i;
      } else if (scores[i] === max) {
        if (wordsArray[i].length === 7) {
          max = scores[i];
          winningWord = wordsArray[i];
          maxIndex = i;
        } else if ((wordsArray[i].length < winningWord.length) && (winningWord.length !== 7)) {
          max = scores[i];
          winningWord = wordsArray[i];
          maxIndex = i;
        }
      }
    }
    return wordsArray[maxIndex];
  },
};

Scrabble.Player = class {
  constructor(name) {
    if (!name) {
      throw new Error('player must have a name');
    }
    this.name = name;
    this.plays = [];
  }

  play(word) {
    if (this.hasWon() === true) {
      return false;
    }
    if (!(word.match(/^[a-zA-Z0-9]{1,7}$/))) {
      throw new Error('must be a word between 1 and 7 letters');
    }
    this.plays.push(word);
    return Scrabble.score(word);
  }

  totalScore() {
    let totalScore = 0;
    this.plays.forEach((play) => {
      totalScore += Scrabble.score(play);
    });
    return totalScore;
  }

  hasWon() {
    return (this.totalScore() > 99);
  }

  highestScoringWord() {
    if (this.plays.length === 0) {
      throw new Error('no words played');
    }
    return Scrabble.highestScoreFrom(this.plays);
  }
};

module.exports = Scrabble;
