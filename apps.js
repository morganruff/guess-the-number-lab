const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  message: prompt(`Enter a guess between ${this.smallestNumber} and ${this.biggestNumber}`),
  getGuesses: function(){
    let guess = this.message;
    return guess;
  }
}


















// const game = {
//     title: 'Guess the Number!',
//     biggestNum: 100,
//     smallestNum: 1,
//     secretNum: null,
//     prevGuesses: [],
//     play: function() {
//       this.secretNum = Math.floor(Math.random() * 
//         (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
//         return this.secretNum
//     },
    
    
//     message: prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`),
//     getGuess: function(){
//       return(this.message);
//       let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);
//       if (guess > this.smallestNum && guess < this.greatestNum) {
//         guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
//       } 
//       if (isNaN(guess) && guess > this.smallestNum && guess < this.greatestNum) {
//         guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
//       } 
//       if (guess < this.smallestNum || guess > this.greatestNum) {
//         guess = null;
//       }
//       return guess
//     }

// }