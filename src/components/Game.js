const femalePlayerList = require("./femalePlayerList");

const SerializedGame = {
  guessedPlayers: [],
  score: 0,
  guessesLeft: 0,
  currentPlayer: {},
};

module.exports = class Game {
  //Typescript verison (from tutorial)
  // static serialize = (game: Game): SerializedGame => {
  //   return {
  //     guessedPlayers: game.guessedPlayers,
  //     score: game.score,
  //     guessesLeft: game.guessesLeft,
  //     currentPlayer: game.currentPlayer,
  //   };
  // };

  static serialize = (game) => {
    return {
      guessedPlayers: game.guessedPlayers,
      score: game.score,
      guessesLeft: game.guessesLeft,
      currentPlayer: game.currentPlayer,
    };
  };

  //Typescript version (from tutorial)
  // static deserialize = (serializedGame: SerializedGame): Game => {
  //   return new Game();
  // };

  static deserialize = (serializedGame) => {
    return new Game();
  };

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
      return "you have finished the game!";
    }
    if (number === this.currentPlayer.ranking) {
      this.guessedPlayers.push(number);
      this.score += this.guessesLeft;
      this.reset();
      return "correct";
    } else {
      this.guessesLeft--;
      if (this.guessesLeft === 0) {
        return "game over";
      } else {
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

  // // Add a custom toJSON method
  // toJSON() {
  //   // Return a plain object representing the game state
  //   return {
  //     guessedPlayers: this.guessedPlayers,
  //     score: this.score,
  //     guessesLeft: this.guessesLeft,
  //     currentPlayer: this.currentPlayer,
  //     // Include other properties you want to save
  //   };
  // }

  // // Add a static method to create a Game instance from serialized data
  // static fromJSON(jsonData) {
  //   const game = new Game();
  //   // Restore the game state using the parsed data
  //   game.guessedPlayers = jsonData.guessedPlayers;
  //   game.score = jsonData.score;
  //   game.guessesLeft = jsonData.guessesLeft;
  //   game.currentPlayer = jsonData.currentPlayer;

  //   return game;
  // }
};
