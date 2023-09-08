const femalePlayerList = require("./femalePlayerList");

module.exports = class Game {
  constructor() {
    this.guessedPlayers = [];
    this.reset();
    this.currentPlayer = this.randomPlayer();
  }

  reset() {
    this.score = 0;
    this.guessesLeft = 10;
  }

  randomPlayer() {
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
    if (number !== this.currentPlayer.ranking) {
      if (this.guessesLeft - 1 === 0) {
        this.reset();
        return "game over";
      } else {
        this.guessesLeft--;
        return "incorrect";
      }
    } else {
      this.guessedPlayers.push(number);
      this.score += this.guessesLeft;
      this.guessesLeft = 10;
      this.currentPlayer = this.randomPlayer();
      return "correct";
    }
  }

  endGame() {
    if (this.guessedPlayers.length === 20) {
      return true;
    }
  }

  skip() {
    console.log(this.currentPlayer);
    this.currentPlayer = this.randomPlayer();
    console.log(this.currentPlayer);
    // score and guessesLeft remains the same, new current player is generated.
  }
};
