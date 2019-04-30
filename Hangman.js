const Hangman = function(word, numberOfGuess){
    this.word = word.toLowerCase().split('')
    this.numberOfGuess = numberOfGuess
    this.guessLetter = []
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

Hangman.prototype.getGuess = function(guess){
    guess = guess.toLowerCase()
    const isUnique = this.guessLetter.includes(guess)
    const isBadGuess = this.word.includes(guess)

    if (!isUnique){
        this.guessLetter.push(guess)
    } 
    if (!isUnique && !isBadGuess){
        this.numberOfGuess--
    }
}




