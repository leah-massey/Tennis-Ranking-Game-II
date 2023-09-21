const femalePlayerList = require("./femalePlayerList");

module.exports = class Game {
  constructor() {
    this.guessedPlayers = [];
    this.score = 0;
    this.reset();
  }

  reset() {
    this.guessesLeft = 10;
    this.currentPlayer = this.randomPlayer();
  }

  randomPlayer() {
    //. generate random number between 0 and 19
    function generateRandomNumber() {
      return Math.trunc(Math.random() * 20);
    }

    let randomNumber = generateRandomNumber();

    while (this.guessedPlayers.includes(randomNumber + 1)) {
      randomNumber = generateRandomNumber();
    }
    return femalePlayerList[randomNumber];
  }

  guess(number) {
    if (
      number === this.currentPlayer.ranking &&
      this.guessedPlayers.length === 19
    ) {
      this.guessedPlayers.push(number);
      this.score += this.guessesLeft;
      console.log("you have finished the game!");
      return "you have finished the game!";
    }
    if (number === this.currentPlayer.ranking) {
      this.guessedPlayers.push(number);
      this.score += this.guessesLeft;
      this.reset();
      console.log("correct");
      return "correct";
    } else {
      this.guessesLeft--;
      if (this.guessesLeft === 0) {
        return "game over";
      } else {
        console.log("incorrect");
        return "incorrect";
      }
    }
  }

  endGame() {
    if (this.guessedPlayers.length === 20 || this.guessesLeft === 0) {
      return true;
    }
  }

  skip() {
    const player = this.currentPlayer;
    let newPlayer;

    // I only want skip loop to work if there is more than one player left to guess
    if (this.guessedPlayers.length < 19) {
      do {
        newPlayer = this.randomPlayer();
      } while (newPlayer === player);

      this.currentPlayer = newPlayer;
      this.guessesLeft = 10;
    }
  }
};
