# guess-constructor
Word Guess command-line game using constructor functions, Node and the inquire package.

## Value Proposition :dart:
  
A little fun with this guessing words game running on `node.js`! To start playing you type in letters either on upper or lower case.
  
## Instructions :memo:  
  
- Start by running `node index`.
- Input letters to try to find out which letters hide behind the underscore.
- Whenever you get the word right, it will prompt and ask if you want to keep on playing. 
- Words might repeat.
- Lastly, you only get *10 attempts* per word.
  
## Code Overview :deciduous_tree:

The most import piece of code on this repository is the use of `object constructors` and the npm package `inquirer`. The main constructor running the checks is the Letter constructor inside letter.js:
  
```javascript
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
        if (guessChar === this.wordPlaceholder[0].toUpperCase() || guessChar === this.wordPlaceholder[0].toLowerCase()) {
            this.guessed = true;
        };    
    }
}

module.exports = Letter;
}
```  
  
## Prerequisites :computer:
Working web browser (e.g Chrome, Firefox, Safari, Opera, etc.) from the list of browser that support jQuery (https://jquery.com/browser-support/):

* Desktop:
  * Chrome: (Current - 1) and Current
  * Edge: (Current - 1) and Current
  * Firefox: (Current - 1) and Current, ESR
  * Internet Explorer: 9+
  * Safari: (Current - 1) and Current
  * Opera: Current

* Mobile
  * Stock browser on Android 4.0+
  * Safari on iOS 7+

  You'll also need to install `inquirer` and `node` on your client by running the following on your terminal:
  ```bash
  npm i inquirer
  brew install node
  ```

## Example Images
Images showing results can be found inside the `example-images` folder in the root of this repository.