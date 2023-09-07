import React from "react";
import Game from "../../components/Game";
import { useState } from "react";

const Play = () => {
  const [game, setGame] = useState(new Game());
  const [player, setPlayer] = useState(game.currentPlayer);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  function guessMessage(guess, numberToGuess) {
    const playerGuess = Number(guess);
    if (playerGuess < numberToGuess) {
      setMessage("they're not that good!");
    } else if (playerGuess > numberToGuess) {
      setMessage("you underestimate them");
    } else if (playerGuess === numberToGuess) {
      setMessage("bang on!");
    }
  }

  const handleCheckButton = (e) => {
    const guessAsNumber = parseFloat(guess);

    const result = game.guess(guessAsNumber);
    guessMessage(guessAsNumber, player.ranking);
    if (result === "correct") {
      setScore(game.score);
      setPlayer(game.currentPlayer);
    } else {
      setGuess("");
    }

    console.log(guessAsNumber);
  };

  const handleSkipButton = (e) => {
    game.skip();
    setPlayer(game.currentPlayer);
  };

  // console.log(
  //   `this is  current player: ${player.firstName}, her ranking is: ${player.ranking}`
  // );

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
                <p className="text-3xl">Score: {score}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            // onClick={handleSkipPlayer}
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
