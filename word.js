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
        console.log(thisString + '\n');
    };
    this.guessWord =  function (intakeChar, remain) {
        for (z = 0; z < this.array.length; z++) {
            this.array[z].letterChecker(intakeChar);
        }
        if (string.toUpperCase().includes(intakeChar) || string.includes(intakeChar)) {
            console.log("\x1b[32m", 'CORRECT!!', '\x1b[37m');
            return remain;
        } else {
            console.log("\x1b[31m", 'INCORRECT!!', '\x1b[37m');
            remain--;
            console.log(remain + " guesses remaining");
            return remain;
        }
    }
};

module.exports = Word;

// var thisString = 'Loop'
// var thisStringLower = thisString.toUpperCase();
// var thisWord =  new Word(thisStringLower);

// thisWord.guessWord('L')
// console.log(thisWord.representWord());