const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        // 
        this.prevGuesses.push(this.getGuess());
        this.resetRange();
        this.render();
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
    },
    getGuess: function () {
      //declare variable guess, do not have to define yet 
      let guess;
      //if the input does not fit our criteria (too big too small or NAN) parseInt will turn into # or return NAN 
      while (isNaN(guess) || guess < this.smallestNum ||guess > this.biggestNum) {
        guess = parseInt(
          prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
        );
      }
      return guess;
    },
    //declare and define lastGuess
    

    resetRange: function () {
      let lastGuess = this.prevGuesses[this.prevGuesses.length - 1];
      if (this.lastGuess > this.secretNum) {
        this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1];
      } else {
        this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
      }
    },
    render: function () {
      let msg;
      let lastGuess = this.prevGuesses[this.prevGuesses.length - 1];
      if ( this.lastGuess === this.secretNum) {
        msg = `Congrats! You guessed the number in ${this.prevGuesses.length} guesses`;
      }
      else if (this.lastGuess > this.secretNum) {
        msg = `Your guess is too high`;
      }
      else {
        msg = `Your guess is too low`;
      }
      alert(msg);
    },
  };
  
  game.play();

