var Letter = require('./letter.js');

var newLetter = new Letter('T'); // Never forget to actually create the instance from the constructor!

// Testing functionality
var character = 'T'
newLetter.letterChecker(character);
console.log(newLetter.guessedLetter());