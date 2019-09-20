var Letter = require('./letter.js');

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
        console.log(thisString);
    };
    this.guessWord =  function (intakeChar) {
        for (z = 0; z < this.array.length; z++) {
            this.array[z].letterChecker(intakeChar);
        }
    }
};

module.exports = Word;

// var thisString = 'Loop'
// var thisStringLower = thisString.toUpperCase();
// var thisWord =  new Word(thisStringLower);

// thisWord.guessWord('L')
// console.log(thisWord.representWord());