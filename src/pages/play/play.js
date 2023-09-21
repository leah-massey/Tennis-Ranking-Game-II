import React from "react";
import Game from "../../components/Game";
import { useState, useEffect } from "react";

const Play = () => {
  const [game, setGame] = useState(new Game());
  const [player, setPlayer] = useState(game.currentPlayer);
  const [guessedPlayers, setGuessedPlayers] = useState([]);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [guessesLeft, setGuessesLeft] = useState(10);

  function guessMessage(guess, numberToGuess) {
    const playerGuess = Number(guess);

    if (playerGuess < numberToGuess) {
      setMessage("they're not that good!");
    } else if (playerGuess > numberToGuess) {
      setMessage("you underestimate them");
    } else if (playerGuess === numberToGuess && guessedPlayers.length === 20) {
      setMessage("bang on! This is end of game!");
    } else if (playerGuess === numberToGuess) {
      setMessage("bang on!");
    }
  }

  useEffect(() => {
    setGuessesLeft(game.guessesLeft);
  }, [game.guessesLeft]);

  const handleCheckButton = (e) => {
    const guessAsNumber = parseFloat(guess); // turn string number into number
    const result = game.guess(guessAsNumber);

    guessMessage(guessAsNumber, player.ranking);
    setGuessesLeft(game.guessesLeft);
    console.log(`this is game.guessesLeft ${game.guessesLeft}`);
    console.log(`this is guessesLeft ${guessesLeft}`);

    if (result === "you have finished the game!") {
      setScore(game.score);
      setGuessedPlayers(game.guessedPlayers);
      console.log(`end of game? ${game.endGame()}`);
    } else if (result === "correct") {
      setScore(game.score);
      setGuessedPlayers(game.guessedPlayers);
      setPlayer(game.currentPlayer);
      setGuess("");
    } else if (result === "incorrect") {
      setGuess("");
    }

    if (result === "game over") {
      setGuess("");
      setMessage("No more guesses left!");
      console.log("game over");
    }
  };

  const handleSkipButton = (e) => {
    game.skip();
    setPlayer(game.currentPlayer);
  };

  const handleRestartButton = async (e) => {
    setGame(new Game());
    setMessage("");
    setScore(0);
    setGuessedPlayers([]);
  };

  useEffect(() => {
    setPlayer(game.currentPlayer);
  }, [game.currentPlayer]);

  return (
    <>
      <div className="items-center h-full">
        <div className="pt-20 pb-10 md:flex md:justify-center grid grid-cols-3 ">
          <div name="left column">
            <div className="bg-cream mr-5 h-96 w-80 pt-10">
              <p className="text-center">Your guess</p>
              <div className=" w-full h-40">
                <input
                  type="number"
                  className="border-2 flex mt-10 mx-auto items-center h-full justify-center pt-10 rounded-lg"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                />
              </div>
              <p className="text-center pt-5">{message}</p>
            </div>
            <div className="w-full pt-3">
              <button
                disabled={game.endGame() === true}
                className="border-2 flex mx-auto py-3 px-5 rounded-lg  bg-cream"
                onClick={handleCheckButton}
              >
                Check
              </button>
            </div>
          </div>
          <div name="middle-column">
            <div className="bg-cream ml-5 mr-5 w-80 h-96 pt-10">
              <div className="flex flex-col items-center">
                <p className="font-bold text-purple-950 pb-7">
                  Current Player:
                </p>
                <div className="bg-black w-60 h-60">
                  <img
                    src={require(`../../images/player-${player.ranking}.png`)}
                    alt="player"
                  />
                </div>
                <p className="pt-3">
                  {player.firstName} {player.secondName}
                </p>
              </div>
            </div>
            <div className="pt-3">
              <button
                disabled={game.endGame() === true}
                className="border-2 flex mx-auto py-3 px-5 rounded-lg bg-cream"
                onClick={handleSkipButton}
              >
                Skip player
              </button>
            </div>
          </div>
          <div name="right-column ">
            <div className="bg-cream ml-5 w-80 h-96 pt-10">
              <div className="pt-10">
                {game.guessesLeft === 0 ? (
                  <p className="text-center flex mx-auto w-3/4">
                    Bad luck, a bit more practise and you'll get there!
                  </p>
                ) : guessedPlayers.length < 20 ? (
                  <p className="text-center flex mx-auto w-3/4">
                    You have {guessesLeft} attempts left to guess{" "}
                    {player.firstName}'s ranking. (it's
                    {player.ranking})
                  </p>
                ) : (
                  <p className="text-center">
                    Well done, you finished the game!!
                  </p>
                )}
              </div>
              <div className=" bg-purple-100 w-full h-40">
                <div className=" bg-white w-52 flex mt-10 mx-auto items-center h-full justify-center pt-10 ">
                  {guessedPlayers.length < 20 && game.guessesLeft !== 0 ? (
                    <p className="text-3xl">Score: {score}</p>
                  ) : (
                    <p className="text-3xl">Final Score: {score}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-3">
              <button
                className=" border-2 flex mx-auto py-3 px-5 rounded-lg  bg-coral"
                onClick={handleRestartButton}
              >
                Start Game Again
              </button>
            </div>
          </div>
        </div>
        <div className="pt-20 pb-10 md:flex md:justify-center grid grid-cols-3 "></div>
      </div>
    </>
  );
};

export default Play;
