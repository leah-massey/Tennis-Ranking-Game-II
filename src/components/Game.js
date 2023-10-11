const femalePlayerList = require("./femalePlayerList");

class Game {
  static deserialize(data) {
    const game = new Game();
    game.guessedPlayers = data.guessedPlayers;
    game.score = data.score;
    game.currentPlayer = data.currentPlayer;
    return game;
  }

  constructor() {
    // at the start of a game, create a duplicate of the femalePlayer list, with all guessesLeft properties from the female player objects
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
    // a refactor would be to use property 'guessed' on players and to loop through, only settling on a player in guessed = false (this guessed property is updating correctly when game is played)

    // while (this.players[randomNumber].guessed === true) {
    //   randomNumber = generateRandomNumber();
    // }

    console.log(this.players[randomNumber]);

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
      this.currentPlayer.guessed = true;
      this.score += this.currentPlayer.guessesLeft;

      return "you have finished the game!";
    }
    if (number === this.currentPlayer.ranking) {
      this.score += this.currentPlayer.guessesLeft;
      this.currentPlayer.guessed = true;
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

module.exports = Game;
