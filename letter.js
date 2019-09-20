example = 'This will be fun!'

function Letter(string) {
    this.wordPlaceholder = [];
    this.guessed = false;
    this.guessedLetter = function () {
        let array =  string.split('');
        console.log(array);
    };
    this.letterChecker =  function () {      
    }
}

var newLetter = new Letter(example); // Never forget to actually create the instance from the constructor!

newLetter.guessedLetter();