const femalePlayerList = require("./femalePlayerList");

export default class Game {
  static deserialize(data) {
    const game = new Game();
    game.guessedPlayers = data.guessedPlayers;
    game.score = data.score;
    game.currentPlayer = data.currentPlayer;
    return game;
  }

  constructor() {
    // at the start of a game, remove all guessesLeft properties from the female player objects
    this.players = femalePlayerList.map((player) => {
      const guessesLeftProperty = "guessesLeft";
      if (player.hasOwnProperty(guessesLeftProperty)) {
        delete player[guessesLeftProperty];
      }
      return player;
    });
    this.guessedPlayers = [];
    this.score = 0;
    this.currentPlayer = this.generateNewPlayer();
  }

  generateNewPlayer() {
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

    // keep generating a number until the number is not that of an already guessed player
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
    // skip method will only work if there is more than one player left to guess
    if (this.guessedPlayers.length < 19) {
      do {
        newPlayer = this.generateNewPlayer();
      } while (newPlayer === player);
      this.currentPlayer = newPlayer;
    }
  }
}
