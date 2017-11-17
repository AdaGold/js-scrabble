const LETTERVALUES = {
  A: [1, 9],
  B: [3, 2],
  C: [3, 2],
  D: [2, 4],
  E: [1, 12],
  F: [4, 2],
  G: [2, 3],
  H: [4, 2],
  I: [1, 9],
  J: [8, 1],
  K: [5, 1],
  L: [1, 4],
  M: [3, 2],
  N: [1, 6],
  O: [1, 8],
  P: [3, 2],
  Q: [10, 1],
  R: [1, 6],
  S: [1, 4],
  T: [1, 6],
  U: [1, 4],
  V: [4, 2],
  W: [4, 2],
  X: [8, 1],
  Y: [4, 2],
  Z: [10, 1],
};

const Scrabble = {
  score(word) {
    if (word.length > 7 || word.length < 1) {
      throw new Error('word must be between 1 and 7 letters');
    }

    const wordArray = word.toUpperCase().split('');

    let sum = (wordArray.length === 7) ? 50 : 0;

    wordArray.forEach((letter) => {
      if (letter in LETTERVALUES) {
        sum += LETTERVALUES[letter][0];
      } else {
        throw new Error('word contains invalid characters');
      }
    });

    return sum;
  },

  highestScoreFrom(words) {
    if (words.length === 0 || words.constructor !== Array) {
      throw new Error('no words to compare score');
    }

    let max = this.score(words[0]);
    let winningWord = words[0];

    words.forEach((word) => {
      const score = this.score(word);

      if (score > max) {
        max = score;
        winningWord = word;
      } else if (score === max) {
        if (word.length === 7) {
          max = score;
          winningWord = word;
        } else if (word.length < winningWord.length && winningWord.length !== 7) {
          max = score;
          winningWord = word;
        }
      }
    });
    return winningWord;
  },
};

Scrabble.TileBag = class {
  constructor() {
    this.tiles = Scrabble.TileBag.setTiles();
  }

  static setTiles() {
    const tiles = [];
    Object.keys(LETTERVALUES).forEach((letter) => {
      const quantity = LETTERVALUES[letter][1];
      for (let i = 0; i < quantity; i += 1) {
        tiles.push(letter);
      }
    });
    return tiles;
  }

  drawTile() {
    return this.tiles.splice(Math.floor(Math.random() * this.tiles.length), 1);
  }
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
    if (this.hasWon()) {
      return false;
    }
    if (!(word.match(/^[a-zA-Z]{1,7}$/))) {
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
    return (this.totalScore() >= 100);
  }

  highestScoringWord() {
    if (this.plays.length === 0) {
      throw new Error('no words played');
    }
    return Scrabble.highestScoreFrom(this.plays);
  }

  highestWordScore() {
    if (this.plays.length === 0) {
      throw new Error('no words played');
    }
    return Scrabble.score(this.highestScoringWord());
  }
};


module.exports = Scrabble;
