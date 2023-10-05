const femalePlayerList = require("./femalePlayerList");

module.exports = class Game {
  static deserialize(data) {
    const game = new Game();
    game.guessedPlayers = data.guessedPlayers;
    game.score = data.score;
    game.guessesLeft = data.guessesLeft;
    game.currentPlayer = data.currentPlayer;
    return game;
  }

  constructor() {
    this.guessedPlayers = [];
    this.score = 0;

    this.skippedPlayers = [];
    this.reset();
    //2. skipped players guesses left
    console.log("skipped players first :");
    console.log(this.skippedPlayers);
  }

  reset() {
    // .generate a new currentPlayer
    this.currentPlayer = this.randomPlayer();

    // // establish new current player's ranking
    // let targetRanking = this.currentPlayer.ranking;

    // // if there are skipped players, loop through to see if the new current player is in their (identifiable by ranking)
    // if (this.skippedPlayers.length === 0) {
    //   console.log("there are no skipped players");
    // } else {
    //   const playerSkipped = this.skippedPlayers.some(
    //     (player) => player.ranking === targetRanking
    //   );

    //   if (playerSkipped) {
    //     console.log("this player has been skipped");
    //   } else {
    //     console.log("this player has NOT been skipped");
    //   }
    // }

    this.guessesLeft = 10;
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
    this.skippedPlayers.push({
      ranking: player.ranking,
      remainingGuesses: this.guessesLeft,
    });
    console.log(`this is skipped players: ${this.skippedPlayers}`);
    //1. store the guesses left for player
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
