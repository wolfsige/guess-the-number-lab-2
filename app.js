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
        prompt(`${guess} was too high, here are your previous guesses: ${this.prevGuesses}.`, `Press Enter to continue.`)
      } else if (guess < this.secretNum) {
        prompt(`${guess} was too low, here are your previous guesses: ${this.prevGuesses}.`,`Press Enter to continue.`)
      } else {
          this.prevGuesses.length === 1 ? prompt(`You guessed ${this.secretNum}! That was the secret number! it took 1 guess!`) : prompt(`You guessed ${this.secretNum}! That was the secret number! it took ${this.prevGuesses.length} guesses!`, `Press Enter to end game.`)
      }
    }
  }
}

game.play()