const Hangman = function(word, numberOfGuess){
    this.word = word.toLowerCase().split('')
    this.numberOfGuess = numberOfGuess
    this.guessLetter = ['h']
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''

    this.word.forEach(letter => {
        if (this.guessLetter.includes(letter)){
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    
    return puzzle
}

const game = new Hangman('hello', 3)
console.log(game.getPuzzle());
