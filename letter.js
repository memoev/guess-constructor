example = 'T'

function Letter(char) {
    this.wordPlaceholder = [];
    this.guessed = false;
    this.guessedLetter = function () {
        if (this.guessed === false) {
            return '_';
        } else {
            return char;
        }
    };
    this.letterChecker =  function () {      
    }
}

var newLetter = new Letter(example); // Never forget to actually create the instance from the constructor!

console.log(newLetter.guessedLetter());