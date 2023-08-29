const Game = require("../components/Game");

describe("Game", () => {
  //1.
  test("a game has an initial score of 0", () => {
    const game = new Game();
    expect(game.score).toEqual(0);
  });

  //2.
  test("a game initially has 10 guesses available", () => {
    const game = new Game();
    expect(game.guessesLeft).toEqual(10);
  });

  //3.
  test("guessesLeft decreases by 1 when 1 incorrect guess is made.", () => {
    const game = new Game();
    game.guess(!game.currentPlayer.ranking);
    expect(game.guessesLeft).toEqual(9);
  });

  //4.
  test("guessesLeft decreases by 2 when 2 incorrect guesses are made.", () => {
    const game = new Game();
    game.guess(!game.currentPlayer.ranking);
    game.guess(!game.currentPlayer.ranking);
    expect(game.guessesLeft).toEqual(8);
  });

  //4.1
  test("after ten incorrect guesses for the currentPlayer, game ends.", () => {
    const game = new Game();
    for (i = 0; i < 9; i++) {
      game.guess(!game.currentPlayer.ranking);
    }

    expect(game.guess(!game.currentPlayer.ranking)).toMatch(
      `You have made too many incorrect guesses for ${game.currentPlayer.firstName}, the game is over.`
    );
  });

  //4.2
  test("when a correct guess is made, guessesLeft resets", () => {
    const game = new Game();
    game.guess(!game.currentPlayer.ranking);
    game.guess(game.currentPlayer.ranking);
    expect(game.guessesLeft).toEqual(10);
  });

  //cgeck this one, I don't think it's working.
  4.4;
  test("when a correct guess is made, a new currentPlayer is generated", () => {
    const game = new Game();
    const currentPlayer = game.currentPlayer;
    game.guess(game.currentPlayer.ranking);
    expect(game.currentPlayer).not.toEqual(currentPlayer);
  });

  //4.5
  test("after ten incorrect guesses for the currentPlayer, game score resets.", () => {
    const game = new Game();
    game.guess(game.currentPlayer.ranking); //correct guess made first so score will be 1
    for (i = 0; i < 10; i++) {
      game.guess(!game.currentPlayer.ranking);
    }
    expect(game.score).toEqual(0);
  });

  //5
  test("after ten incorrect guesses for the currentPlayer, guessesLeft resets to 10.", () => {
    const game = new Game();
    game.guess(game.currentPlayer.ranking); //correct guess made first so score will be 1
    for (i = 0; i < 10; i++) {
      game.guess(!game.currentPlayer.ranking);
    }

    expect(game.guessesLeft).toEqual(10);
  });

  //5.1
  test("after ten incorrect guesses for the currentPlayer, score resets to 0.", () => {
    const game = new Game();
    game.guess(game.currentPlayer.ranking); //correct guess made first so score will be 1
    for (i = 0; i < 10; i++) {
      game.guess(!game.currentPlayer.ranking);
    }

    expect(game.score).toEqual(0);
  });

  //6.
  test("score does not increase with an incorrect guess", () => {
    const game = new Game();
    game.guess(!game.currentPlayer.ranking);
    expect(game.score).toEqual(0);
  });

  //7.
  test("when a correct guess is made, score increases by guessesLeft", () => {
    const game = new Game();
    game.guess(!game.currentPlayer.ranking);
    game.guess(game.currentPlayer.ranking);
    expect(game.score).toEqual(9);
  });

  //8.
  test(".reset returns the score and guessesLeft to their original values", () => {
    const game = new Game();
    game.guess(game.currentPlayer.ranking);
    game.guess(game.currentPlayer.ranking);
    game.reset();
    expect(game.score).toEqual(0);
    expect(game.guessesLeft).toEqual(10);
  });

  //9
  test("this.currentPlayer is a valid player", () => {
    const game = new Game();
    expect(game.currentPlayer.firstname).not.toEqual(null);
    expect(game.currentPlayer.secondName).not.toEqual(null);
    expect(game.currentPlayer.ranking).not.toEqual(null);
  });

  //10 // return to this one as it's not bullet proof
  test("when guess is correct, a new currentPlayer is generated", () => {
    const game = new Game();
    const firstPlayer = game.currentPlayer;
    game.guess(firstPlayer.ranking);
    expect(game.currentPlayer).toHaveProperty("firstName");
    expect(game.guessedPlayers).toEqual([firstPlayer.ranking]);
    expect(game.currentPlayer).not.toEqual(firstPlayer);
  });

  //11
  test("when a guess is correct currentPlayer ranking gets added to this.guessedPlayers", () => {
    const game = new Game();
    const firstPlayer = game.currentPlayer;
    game.guess(firstPlayer.ranking);
    expect(game.guessedPlayers).toEqual([firstPlayer.ranking]);
  });

  //12
  test("when multiple guesses are correct currentPlayer numbers are added to this.guessedPlayers", () => {
    const game = new Game();
    const firstPlayer = game.currentPlayer;
    game.guess(firstPlayer.ranking);
    const secondPlayer = game.currentPlayer;
    game.guess(secondPlayer.ranking);
    expect(game.guessedPlayers).toHaveLength(2);
  });

  //13
  test("when guess is not correct, currentPlayer remains the same", () => {
    const game = new Game();
    const firstPlayer = game.currentPlayer;
    game.guess(!firstPlayer.ranking);
    expect(game.currentPlayer).toEqual(firstPlayer);
  });

  //14
  test("when 20 correct guesses have been made, guessedPlayers length is 20", () => {
    const game = new Game();
    for (i = 0; i < 20; i++) {
      game.guess(game.currentPlayer.ranking);
    }
    expect(game.guessedPlayers).toHaveLength(20);
  });

  //15
  test("when 20 correct guesses are made in a row, final score is 200", () => {
    const game = new Game();
    for (i = 0; i < 20; i++) {
      game.guess(game.currentPlayer.ranking);
    }

    expect(game.score).toBe(200);
  });

  //16
  test("when all players have been guessed, final score is returned", () => {
    const game = new Game();
    for (i = 0; i < 20; i++) {
      game.guess(game.currentPlayer.ranking);
    }

    expect.stringContaining(`game over! Your final score is ${game.score}`);
  });

  // //17
  // test("skip generates a new random player", () => {
  //   const game = new Game();
  //   const firstPlayer = game.currentPlayer;
  //   game.skip();
  //   expect(game.currentPlayer).not.toEqual(firstPlayer);
  // });
});
