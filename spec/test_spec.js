var Scrabble = require(__dirname + "/../index.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});
