const LETTER_VALUES = {
  'a': 1,
  'b': 3,
  'c': 3,
  'd': 2,
  'e': 1,
  'f': 4,
  'g': 2,
  'h': 4,
  'i': 1,
  'j': 8,
  'k': 5,
  'l': 1,
  'm': 3,
  'n': 1,
  'o': 1,
  'p': 3,
  'q': 10,
  'r': 1,
  's': 1,
  't': 1,
  'u': 1,
  'v': 4,
  'w': 4,
  'x': 8,
  'y': 4,
  'z': 10
};


const Scrabble = {
  score: function(word) {
    // TODO: implement score
    if (word.length == 0) {
      throw "Can't score an empty word!";
    } else if (word.length > 7) {
      throw "Invalid word '" + word + "' is longer than 7 letters (" + word.length + ")"
    }

    word = word.toLowerCase();
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (!(letter in LETTER_VALUES)) {
        throw 'Invalid letter "' + letter + '" at position ' + i;
      }
      score += LETTER_VALUES[letter];
    }

    if (word.length == 7) {
      score += 50;
    }

    return score;
  },

  // TODO: add a highestScoreFrom method
  highestScoreFrom: function(words) {
    if (!Array.isArray(words)) {
      throw 'Input is not an array!';
    } else if (words.length < 1) {
      throw 'No words in input';
    }

    let bestWord = undefined;
    let bestScore = 0;
    for (let i = 0; i < words.length; i++) {
      let wordScore = this.score(words[i]);
      if (wordScore > bestScore) {
        bestWord = words[i];
        bestScore = wordScore;

      } else if (wordScore == bestScore) {
        if (bestWord.length == 7) {
          // Can't be beat - nothing to do

        } else if (words[i].length == 7) {
          // Prefer 7-letter word in a tie
          bestWord = words[i];
          bestScore = wordScore;

        } else if (words[i].length < bestWord.length) {
          // Prefer shorter words if none has 7 letters
          bestWord = words[i];
          bestScore = wordScore;
        }
      }
    }
    return bestWord;
  }
}

Scrabble.Player = class {
  // TODO: implement the Player class
  constructor(name) {
    if (name == null) {
      throw "Player requires a name!";
    }
    this.name = name;
    this.plays = [];
    this.currentScore = 0;
  }

  play(word) {
    if (this.hasWon()) {
      return false;
    }

    this.currentScore +=Scrabble.score(word);
    this.plays.push(word);
    return true;
  }

  totalScore() {
    return this.currentScore;
  }

  hasWon() {
    return this.currentScore >= 100;
  }

  highestScoringWord() {
    return Scrabble.highestScoreFrom(this.plays);
  }

  highestWordScore() {
    return Scrabble.score(this.highestScoringWord());
  }
}


// This is required for our tests! Don't remove it.
module.exports = Scrabble;
