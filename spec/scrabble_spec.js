const Scrabble = require('../scrabble');

describe('score', function() {
  it ('is defined', function() {
    expect(Scrabble.score).toBeDefined();
  });

  it ('correctly scores simple words', function() {
    expect(Scrabble.score('dog')).toBe(5);
    expect(Scrabble.score('cat')).toBe(5);
    expect(Scrabble.score('pig')).toBe(6);
  });

  it ('adds 50 points for a 7-letter word', function() {
    expect(Scrabble.score('academy')).toBe(65);
  });

  it ('throws on bad characters', function() {
    expect(function () {
      Scrabble.score('char^');
    }).toThrow();
  });

  it ('handles all upper- and lower-case letters', function() {
    expect(Scrabble.score('dog')).toBe(5);
    expect(Scrabble.score('DOG')).toBe(5);
    expect(Scrabble.score('DoG')).toBe(5);
  });

  it ('does not allow words > 7 letters', function() {
    expect(function() { Scrabble.score('abcdefgh'); }).toThrow();
  });

  it ('does not allow empty words', function() {
    expect(function() { Scrabble.score(''); }).toThrow();
  });
});

describe('highestScoreFrom', function() {
  it ('is defined', function() {
    expect(Scrabble.highestScoreFrom).toBeDefined();
  });

  it ('throws if no words were passed', function() {
    expect(function() { Scrabble.highestScoreFrom([]); }).toThrow();
    expect(function() { Scrabble.highestScoreFrom('not array'); }).toThrow();
  });

  it ('returns the only word in a length-1 array', function() {
    expect(Scrabble.highestScoreFrom(['dog'])).toBe('dog');
  });

  it ('returns the highest word if there are two words', function() {
    // Check score assumptions
    expect(Scrabble.score('dog')).toBe(5);
    expect(Scrabble.score('pig')).toBe(6);

    // Test the functionality
    expect(Scrabble.highestScoreFrom(['dog', 'pig'])).toBe('pig');
    expect(Scrabble.highestScoreFrom(['pig', 'dog'])).toBe('pig');
  });

  it ('if tied, prefer a word with 7 letters', function() {
    const loser = 'zzzzzz';
    const winner = 'iiiiddd';

    // Check score assumptions
    expect(Scrabble.score(loser)).toBe(60);
    expect(Scrabble.score(winner)).toBe(60);

    // Test functionality
    expect(Scrabble.highestScoreFrom([loser, winner])).toBe(winner);
    expect(Scrabble.highestScoreFrom([winner, loser])).toBe(winner);
  });

  it ('if tied and no word has 7 letters, prefers the word with fewer letters', function() {
    // Check score assumptions
    expect(Scrabble.score('dog')).toBe(5);
    expect(Scrabble.score('goat')).toBe(5);

    // Test functionality
    expect(Scrabble.highestScoreFrom(['dog', 'goat'])).toBe('dog');
    expect(Scrabble.highestScoreFrom(['goat', 'dog'])).toBe('dog');
  });

  it ('returns the first word of a tie with same letter count', function() {
    // Check score assumptions
    expect(Scrabble.score('i')).toBe(1);
    expect(Scrabble.score('dog')).toBe(5);
    expect(Scrabble.score('cat')).toBe(5);

    // Test the functionality
    expect(Scrabble.highestScoreFrom(['dog', 'dog'])).toBe('dog');
    expect(Scrabble.highestScoreFrom(['dog', 'cat'])).toBe('dog');
    expect(Scrabble.highestScoreFrom(['cat', 'dog'])).toBe('cat');
    expect(Scrabble.highestScoreFrom(['i', 'dog', 'cat'])).toBe('dog');
  });
});

describe('Player', function() {
  it ('is defined', function() {
    expect(Scrabble.Player).toBeDefined();
  });

  describe('Constructor', function() {
    it('Creates a new player', function() {
      let name = 'test name';
      let player = new Scrabble.Player(name);
      expect(player.name).toBe(name);
    });

    it('Requires a name', function() {
      expect(function() { new Scrabble.Player(); }).toThrow();
    });
  });

  describe ('play', function() {
    it ('Records the played word', function() {
      let word = 'dog';
      let player = new Scrabble.Player('test player');
      expect(player.plays.length).toBe(0);

      expect(player.play(word)).toBeTruthy();

      expect(player.plays.length).toBe(1);
      expect(player.plays[0]).toBe(word);
    });

    it ('Requires a real word', function() {
      let player = new Scrabble.Player('test player');
      expect(player.plays.length).toBe(0);

      expect(function() { player.play(); }).toThrow();
      expect(player.plays.length).toBe(0);

      expect(function() { player.play(44); }).toThrow();
      expect(player.plays.length).toBe(0);
    });

    it ('Returns false and does not update plays if the player has already won', function() {
      let player = new Scrabble.Player('test player');
      expect(player.play('zzzzzzz')).toBeTruthy(); // +120 pts
      expect(player.plays.length).toBe(1);
      expect(player.hasWon()).toBeTruthy();

      expect(player.play('dog')).toBe(false);
      expect(player.plays.length).toBe(1);
    });
  });

  describe ('totalScore', function() {
    it ('Is zero if the player has not played anything', function() {
      let player = new Scrabble.Player('test player');
      expect(player.totalScore()).toBe(0);
    });

    it ('Is updated by play', function() {
      let player = new Scrabble.Player('test player');
      expect(player.totalScore()).toBe(0);
      player.play('dog');
      expect(player.totalScore()).toBe(5);
      player.play('cat');
      expect(player.totalScore()).toBe(10);
      player.play('goat');
      expect(player.totalScore()).toBe(15);
    });
  });

  describe('hasWon', function() {
    it('returns false when score < 100', function() {
      let player = new Scrabble.Player('test player');
      expect(player.totalScore()).toBe(0);
      expect(player.hasWon()).toBe(false);

      player.play('zzzzz'); // Score += 50
      expect(player.totalScore()).toBe(50);
      expect(player.hasWon()).toBe(false);

      player.play('zzzzji'); // Score += 49
      expect(player.totalScore()).toBe(99);
      expect(player.hasWon()).toBe(false);
    });

    it('returns true when score == 100', function() {
      let player = new Scrabble.Player('test player');
      player.play('zzzzbbf'); // Score += 100
      expect(player.totalScore()).toBe(100);
      expect(player.hasWon()).toBe(true);
    });

    it('returns true when score > 100', function() {
      let player = new Scrabble.Player('test player');
      player.play('zzzzzzz'); // Score += 120
      expect(player.totalScore()).toBe(120);
      expect(player.hasWon()).toBe(true);
    });
  });

  describe('highestScoringWord', function() {
    // Tie-breaking logic is already described in the tests
    // for highestWordFrom, so we will not repeat it here.
    it('returns the highest scoring word played', function() {
      let player = new Scrabble.Player('test player');
      player.play('cat');
      player.play('zzzz');
      expect(player.highestScoringWord()).toBe('zzzz');
    });

    it('throws an error if no words have been played', function() {
      let player = new Scrabble.Player('test player');
      expect(() => { player.highestScoringWord() }).toThrow();
    });
  });

  describe('highestWordScore', function() {
    it('returns the score of the highest scoring word played', function() {
      let player = new Scrabble.Player('test player');
      player.play('cat');
      player.play('zzzz');
      expect(player.highestWordScore()).toBe(40);
    });

    it('throws an error if no words have been played', function() {
      let player = new Scrabble.Player('test player');
      expect(() => { player.highestWordScore() }).toThrow();
    });
  });
});
