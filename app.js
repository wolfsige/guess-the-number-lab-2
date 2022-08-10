const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function () {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    this.getGuess()
  },
  getGuess: function () {
    let guess;
    while (guess !== this.secretNum) {
      guess = parseInt(prompt(`Enter a Number between ${this.smallestNum} and ${this.biggestNum}.`))
      this.prevGuesses.push(guess)
      if (guess > this.secretNum) {
        alert(`${guess} was too high, here are your previous guesses: ${this.prevGuesses}.`)
      } else if (guess < this.secretNum) {
        alert(`${guess} was too low, here are your previous guesses: ${this.prevGuesses}.`)
      } else {
          this.prevGuesses.length === 1 ? alert(`You guessed ${this.secretNum}! That was the secret number! It took you only 1 guess, wow!`) : alert(`You guessed ${this.secretNum}! That was the secret number! It took you ${this.prevGuesses.length} guesses!`)
      }
    }
  }
}

game.play()