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
    gameOn: function (array, remaining) {
        
        var selectWord = array[Math.floor(Math.random() * array.length)]
        console.log(selectWord);
        
        var newWord = new Word(selectWord);
        
        newWord.representWord();

        function play() {
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
                remaining =  newWord.guessWord(res.inputLetter, remaining);
                newWord.representWord();
                if (remaining === 0) {
                    console.log("GAME OVER :(");
                    game.gameOff();
                } else {
                    play();
                };
            });
        }
        play();
    },
    gameOff : function () {
        inquirer
            .prompt([
                {
                    type: "confirm",
                    message: "Wanna play again??",
                    name: "playagain",
                    default: true
                }
            ])
            .then(function (res) {
                if (res.playagain === true) {
                    game.gameOn(arrayOfOptions, 10);
                } else {
                    console.log('bye bye :D');
                }
            });
    }
};

game.gameOn(arrayOfOptions, remainingGuesses);