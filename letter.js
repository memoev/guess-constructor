function Letter(char) {
    this.wordPlaceholder = [char];
    this.guessed = false;
    this.guessedLetter = function () {
        if (char === ' ') {
            this.guessed = true;
            return ' ';
        } else if (this.guessed === false) {
            return '_';
        } else {
            return char;
        };
    };
    this.letterChecker =  function (guessChar) { 
        if (guessChar === this.wordPlaceholder[0].toUpperCase() || guessChar === this.wordPlaceholder[0]) {
            this.guessed = true;
        };    
    }
}

module.exports = Letter;

// var newLetter = new Letter('T'); // Never forget to actually create the instance from the constructor!

// Testing functionality
// var character = ' '
// newLetter.letterChecker(character);
// console.log(newLetter.guessedLetter());