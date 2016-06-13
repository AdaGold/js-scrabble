# Scrabble with JavaScript!
We are going to rebuild our Scrabble project using our knew knowledge of JavaScript.

## Project Expectations

From the project root, you should be able to execute all of your test by running `npm test`. Each function you create should be a part of the `Scrabble` function (acting as a class).

## Baseline Requirements
Review the requirements and come up with a "plan of action" for how you want to approach this problem.

The baseline repository contains an empty node project which contains the starter structure to get you started.

#### Score chart

|Letter                        | Value|
|:----------------------------:|:----:|
|A, E, I, O, U, L, N, R, S, T  |   1  |
|D, G                          |   2  |
|B, C, M, P                    |   3  |
|F, H, V, W, Y                 |   4  |
|K                             |   5  |
|J, X                          |   8  |
|Q, Z                          |   10 |


## Wave 1

### Primary Requirements
Create the following functions within the `Scrabble` module. You should create at least 8 tests that test this new code.
- `score(word)`: returns the total score value for the given word. The word is input as a string (case insensitive). The chart below shows the point value for a given letter.
- `highestScoreFrom(arrayOfWords)`: returns **the word in the array with the highest score**.
    - Note that it’s better to use fewer tiles, so if the top score is tied between multiple words, pick the one with the fewest letters.
    - Note that there is a bonus (50 points) for using all seven letters. If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles.
    - If the there are multiple words that are the same score and same length, pick the first one in supplied list.



## Wave 2

### Primary Requirements
Create a new `Player` object with a minimum of 11 test. The object should have the following functions:

- Constructor: Called when you use `new Player(name)`, sets up an instance with the instance variable `name` assigned
- `name`: property which returns the value of the player's name
- `plays`: property which returns an Array of the words played by the player
- `play(word)`: Function which will adds the input word to the `plays` Array
    - Returns false if player has already won
- `total_score()`: Function which sums up and returns the score of the players words
- `hasWon()`: Function with logic to determine if the player has over 100 points, returns `true`, otherwise returns 'false'
- `highestScoringWord()`: Function which returns the highest scoring word the user has played.
- `highestWordScore()`: Function which returns the `highestScoringWord` score.

### Optional Enhancements
- Create a `TileBag` object that includes functionality that allows us to drawTiles and determine the remaining tiles.
Beginning Tile Quantities:
  - A: 9
  - B: 2
  - C: 2
  - D: 4
  - E: 12
  - F: 2
  - G: 3
  - H: 2
  - I: 9
  - J: 1
  - K: 1
  - L: 4
  - M: 2
  - N: 6
  - O: 8
  - P: 2
  - Q: 1
  - R: 6
  - S: 4
  - T: 6
  - U: 4
  - V: 2
  - W: 2
  - X: 1
  - Y: 2
  - Z: 1
- Create a `Dictionary` object that includes a function for searching a list of words to determine if a given word is a valid word.
- Create a `Board` object that has a matrix (array of arrays) of tile places. Check if a word can be played on a given tile place in a certain direction.
- Include a minimum of 20 tests between the `TileBag`, `Dictionary` and `Board` objects.
