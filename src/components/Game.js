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

    while (this.guessedPlayers.includes(randomNumber)) {
      randomNumber = generateRandomNumber();
    }

    // setPlayerPhoto(playerPhoto, randomNumber);
    return femalePlayerList[randomNumber];
  }

  guess(number) {
    if (number !== this.currentPlayer.ranking) {
      if (this.guessesLeft - 1 === 0) {
        this.reset();
        // return `You have made too many incorrect guesses for ${this.currentPlayer.firstName}, the game is over.`;
        return "game over";
      } else {
        this.guessesLeft--;
        return "incorrect";
      }
    } else {
      this.guessedPlayers.push(number);
      this.score += this.guessesLeft;
      // this.endGame;
      this.guessesLeft = 10;
      this.currentPlayer = this.randomPlayer();
      return "correct";
    }
  }

  endGame() {
    if (this.guessedPlayers.length === 20) {
      return `game over! Your final score is ${this.score}`;
    }
  }

  skip() {
    console.log(this.currentPlayer);
    this.currentPlayer = this.randomPlayer();
    console.log(this.currentPlayer);
    // score and guessesLeft remains the same, new current player is generated.
  }
};
