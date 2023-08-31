import React from "react";
import Game from "../../components/Game";
import { useState } from "react";

const Play = () => {
  const game = new Game();
  const [currentPlayer, setCurrentPlayer] = useState(game.currentPlayer);

  console.log(
    `this is  current player: ${game.currentPlayer.firstName} ranking ${game.currentPlayer.ranking}`
  );

  function handleSkipPlayer() {}

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
                // value={guess}
                // onChange={(e) => setGuess(e.target.value)}
              />
            </div>
            <div className="bg-sky-100 w-full mt-10">
              <button className="border-2 flex mx-auto py-3 px-5 rounded-lg">
                Check
              </button>
            </div>
          </div>
          <div name="middle-column" className="bg-white mr-10 w-80 h-96 pt-10">
            <div className="flex flex-col items-center">
              <p className="font-bold text-purple-950 pb-7">Current Player:</p>
              <div className="bg-black w-60 h-60 py-10">
                <img
                  src={require(`../../images/player-${currentPlayer.ranking}.png`)}
                  alt="player"
                />
              </div>
              <p className="pt-3">
                {currentPlayer.firstName} {currentPlayer.secondName}
              </p>
            </div>
          </div>
          <div name="right-column" className="bg-white w-80 h-96 pt-10">
            <p className="text-center">Your Score</p>
            <div className="pt-10">
              <p className="flex mx-auto w-3/4">
                You have {game.guessesLeft} attempts left to guess{" "}
                {currentPlayer.firstName}'s ranking. (it's
                {game.currentPlayer.ranking})
              </p>
            </div>
            <div className=" bg-purple-100 w-full h-40">
              <div className=" bg-white w-52 flex mt-10 mx-auto items-center h-full justify-center pt-10 ">
                <p className="text-3xl">Score: {game.score}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            // onClick={handleSkipPlayer}
            className="bg-white border-2 flex mx-auto py-3 px-5 rounded-lg"
          >
            Skip player
          </button>
        </div>
      </div>
    </>
  );
};

Play.getInitialProps = async () => {
  // Fetch the data here and return it as an object
  const game = await new Game();
  const currentPlayer = await game.currentPlayer;

  return { game, currentPlayer };
};

export default Play;
