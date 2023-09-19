import React from "react";
import Game from "../../components/Game";
import { useState } from "react";

const Play = () => {
  const [game, setGame] = useState(new Game());
  const [player, setPlayer] = useState(game.currentPlayer);
  const [guessedPlayers, setGuessedPlayers] = useState([]);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

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

  const handleCheckButton = (e) => {
    const guessAsNumber = parseFloat(guess); // turn string number into number
    const result = game.guess(guessAsNumber);

    guessMessage(guessAsNumber, player.ranking);

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
      // probably not what I want?
      setGame(new Game());
      console.log("new game started");
      setPlayer(game.currentPlayer);
    }
  };

  const handleSkipButton = (e) => {
    game.skip();
    setPlayer(game.currentPlayer);
  };

  return (
    <>
      <div className="items-center h-full">
        <div className="pt-40 pb-10 md:flex md:justify-center grid grid-cols-3 ">
          <div name="left column" className="bg-white mr-10 h-96 w-80 pt-10">
            <p className="text-center">Your guess</p>
            <div className=" bg-purple-100 w-full h-40">
              <input
                type="number"
                className="border-2 flex mt-10 mx-auto items-center h-full justify-center pt-10 rounded-lg"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
              />
            </div>
            <p>{message}</p>
            <div className="bg-sky-100 w-full mt-10">
              <button
                disabled={game.endGame() === true}
                className="border-2 flex mx-auto py-3 px-5 rounded-lg"
                onClick={handleCheckButton}
              >
                Check
              </button>
            </div>
          </div>
          <div name="middle-column" className="bg-white mr-10 w-80 h-96 pt-10">
            <div className="flex flex-col items-center">
              <p className="font-bold text-purple-950 pb-7">Current Player:</p>
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
          <div name="right-column" className="bg-white w-80 h-96 pt-10">
            <p className="text-center">Your Score</p>
            <div className="pt-10">
              <p className="flex mx-auto w-3/4">
                You have {game.guessesLeft} attempts left to guess{" "}
                {player.firstName}'s ranking. (it's
                {player.ranking})
              </p>
            </div>
            <div className=" bg-purple-100 w-full h-40">
              <div className=" bg-white w-52 flex mt-10 mx-auto items-center h-full justify-center pt-10 ">
                {guessedPlayers.length < 20 ? (
                  <p className="text-3xl">Score: {score}</p>
                ) : (
                  <p className="text-3xl">Final Score: {score}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            disabled={game.endGame() === true}
            className="bg-white border-2 flex mx-auto py-3 px-5 rounded-lg"
            onClick={handleSkipButton}
          >
            Skip player
          </button>
        </div>
      </div>
    </>
  );
};

export default Play;
