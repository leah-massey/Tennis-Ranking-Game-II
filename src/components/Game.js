const femalePlayerList = require("./femalePlayerList");

module.exports = class Game {
  static deserialize(data) {
    const game = new Game();
    game.guessedPlayers = data.guessedPlayers;
    game.score = data.score;
    game.currentPlayer = data.currentPlayer;
    return game;
  }

  constructor() {
    this.players = femalePlayerList.map((player) => {
      const propertyToDelete = "guessesLeft";
      if (player.hasOwnProperty(propertyToDelete)) {
        delete player[propertyToDelete];
      }
      return player;
    });
    this.guessedPlayers = [];
    this.score = 0;
    this.currentPlayer = this.generateNewPlayer();
  }

  generateNewPlayer() {
    // .generate a new currentPlayer

    const player = this.randomPlayer();

    if (player.guessesLeft == null) {
      player.guessesLeft = 10;
    }
    return player;
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
    return this.players[randomNumber];
  }

  guess(number) {
    if (
      number === this.currentPlayer.ranking &&
      this.guessedPlayers.length === 19
    ) {
      this.guessedPlayers.push(number);
      this.score += this.currentPlayer.guessesLeft;
      return "you have finished the game!";
    }
    if (number === this.currentPlayer.ranking) {
      this.score += this.currentPlayer.guessesLeft;
      this.guessedPlayers.push(number);
      this.currentPlayer = this.generateNewPlayer();
      return "correct";
    } else {
      this.currentPlayer.guessesLeft--;
      if (this.currentPlayer.guessesLeft === 0) {
        return "game over";
      } else {
        return "incorrect";
      }
    }
  }

  endGame() {
    if (
      this.guessedPlayers.length === 20 ||
      this.currentPlayer.guessesLeft === 0
    ) {
      return true;
    }
  }

  skip() {
    const player = this.currentPlayer;
    let newPlayer;
    // I only want skip loop to work if there is more than one player left to guess
    if (this.guessedPlayers.length < 19) {
      //
      do {
        newPlayer = this.generateNewPlayer();
      } while (newPlayer === player);

      this.currentPlayer = newPlayer;
    }
  }
};
