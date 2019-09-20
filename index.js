var Word = require('./word.js');
var inquirer = require('inquirer');

remainingGuesses = 10;
arrayOfOptions = [
    'Abstraction',
    'Binary',
    'Callback Function',
    'Search Engine',
    'Server'
];

var game = {
    selectGame: function (array) {
        
        var selectWord = array[Math.floor(Math.random() * array.length)]
        console.log(selectWord);
        
        var newWord = new Word(selectWord);
        
        newWord.representWord();
        return newWord;
    },
    playGame: function () {
        var wordUsed = this.selectGame(arrayOfOptions);
        inquirer
            .prompt([
                /* Pass your questions in here */
                {
                    type: "input",
                    message: "Guess a letter!",
                    name: "inputLetter"
                }
            ])
            .then(function (res) {
                wordUsed.guessWord(res.inputLetter)
                wordUsed.representWord();
            });
    }
};

game.playGame();