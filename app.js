const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function () {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    this.getGuess()
  },
  getGuess: function () {
    let guess;

    
    while (guess !== this.secretNum){
      guess = parseInt(prompt(`Enter a Number between ${this.smallestNum} and ${this.biggestNum}.`))
    }
    
    console.log(guess)


  }
}

game.play()