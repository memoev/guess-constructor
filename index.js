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

var selectWord = arrayOfOptions[Math.floor(Math.random() * arrayOfOptions.length)]
console.log(selectWord);

var newWord = new Word(selectWord);

