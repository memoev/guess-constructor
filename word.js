var Letter = require('./letter.js');

// var newLetter = new Letter('T'); // Never forget to actually create the instance from the constructor!

// // Testing functionality
// var character = 'T'
// newLetter.letterChecker(character);
// console.log(newLetter.guessedLetter());

function Word(string) {
    this.array = [];
    for (i = 0; i < string.length; i++) {
        var newLetter = new Letter(string[i]);
        this.array.push(newLetter);
    };
    this.representWord =  function () {
        var thisString = '';
        for (j = 0; j < this.array.length; j++) {
            thisString += this.array[j].guessedLetter() + ' ';
        }
        return thisString; 
    };
    this.guessWord =  function (intakeChar) {
        for (z = 0; z < this.array.length; z++) {
            this.array[z].letterChecker(intakeChar);
        }
    }
};

var thisString = 'Loop'
var thisStringLower = thisString.toUpperCase();
var thisWord =  new Word(thisStringLower);

thisWord.guessWord('L')
console.log(thisWord.representWord());