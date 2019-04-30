const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guess')

const game = new Hangman('hello', 3)

puzzleEl.textContent = 'Puzzled word        : ' + game.getPuzzle()
guessEl.textContent = 'Number of guesses    : '+game.numberOfGuess

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    game.getGuess(guess)
    puzzleEl.textContent = 'Puzzled word        : ' +game.getPuzzle()
    guessEl.textContent = 'Number of guesses    : '+ game.numberOfGuess
    
    if (game.numberOfGuess < 0){
        guessEl.textContent = 'You lose'
        return;
    }

})