import React from "react";
import Game from "../components/Game";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import ProgressBar from "../components/ProgressBar";

const Play = () => {
  // const [game, setGame] = useState(new Game());
  const [game, setGame] = useState(() => {
    const jsonGame = JSON.parse(localStorage.getItem("game"));
    return jsonGame ? Game.deserialize(jsonGame) : new Game();
  });
  const [player, setPlayer] = useState(game.currentPlayer);
  const [guessedPlayers, setGuessedPlayers] = useState([]);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [guessesLeft, setGuessesLeft] = useState(10);
  const [showGameOver, setShowGameOver] = useState(false);

  useEffect(() => {
    const jsonGame = JSON.parse(localStorage.getItem("game")) || new Game();
    const savedGame = Object.assign(new Game(), jsonGame);
    setGame(savedGame);
    setScore(savedGame.score);
  }, []);

  useEffect(() => {
    localStorage.setItem("game", JSON.stringify(game));
  });

  const handleNewGame = () => {
    setShowGameOver(false);
    setGame(new Game());
    setGuess("");
    setMessage("");
    setScore(0);
    setGuessedPlayers([]);
  };

  useEffect(() => {
    setGuessesLeft(game.currentPlayer.guessesLeft);
  }, [game.currentPlayer.guessesLeft]);

  useEffect(() => {
    setPlayer(game.currentPlayer);
  }, [game.currentPlayer]);

  function guessMessage(guess, numberToGuess) {
    const playerGuess = Number(guess);

    if (playerGuess < numberToGuess) {
      setMessage("They're not that good!");
    } else if (playerGuess > numberToGuess) {
      setMessage("You underestimate them.");
    } else if (playerGuess === numberToGuess && guessedPlayers.length === 20) {
      setMessage("Bang on! This is end of game!");
    } else if (playerGuess === numberToGuess) {
      setMessage("Bang on!");
    }
  }

  const handleCheckButton = (e) => {
    const guessAsNumber = parseFloat(guess); // turn string number into number
    const result = game.guess(guessAsNumber);

    guessMessage(guessAsNumber, player.ranking);
    setGuessesLeft(game.currentPlayer.guessesLeft);

    if (result === "you have finished the game!") {
      setScore(game.score);
      setGuessedPlayers(game.guessedPlayers);
      setShowGameOver(true);
    } else if (result === "correct") {
      setScore(game.score);
      setGuessedPlayers(game.guessedPlayers);
      setPlayer(game.currentPlayer);
      setGuess("");
    } else if (result === "incorrect") {
      setGuess("");
    }

    if (result === "game over") {
      setShowGameOver(true);
      setGuess("");
      setMessage("No more guesses left!");
      console.log("game over");
    }
  };

  const handleKeyPress = (e) => {
    // Key press 'enter'
    if (
      e.keyCode === 13 ||
      (e.which === 13 && game.currentPlayer.guessesLeft > 0)
    ) {
      handleCheckButton();
    }
  };

  const handleSkipButton = (e) => {
    game.skip();
    setPlayer(game.currentPlayer);
  };

  const handleRestartButton = async (e) => {
    setGuess("");
    setGame(new Game());
    setMessage("");
    setScore(0);
    setGuessedPlayers([]);
  };

  return (
    <>
      <div className="items-center h-full font-mono">
        <div className="pt-20 pb-10 md:flex md:justify-center grid grid-cols-3 ">
          <div name="left column">
            <div className="box bg-cream rounded-lg mr-5 ml-5 w-80 h-96 pt-10">
              <div className=" w-full h-40">
                <input
                  placeholder=""
                  type="number"
                  className="border-2 flex mt-9 mx-auto items-center h-full w-2/3 justify-center pt-1 rounded-lg text-5xl text-center"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <p className="text-center pt-4">Your guess 👆🏻</p>
              <p className="text-center -my-4">{message}</p>
            </div>
            <div className="w-full pt-3">
              <button
                disabled={game.endGame() === true}
                className="w-52 border-2 flex items-center justify-center mx-auto py-3 px-5 rounded-lg bg-cream hover:bg-blue"
                onClick={handleCheckButton}
              >
                Check
              </button>
            </div>
          </div>
          <div name="middle-column">
            <div className="box bg-cream rounded-lg ml-5 mr-5 w-80 h-96 pt-10">
              <div className="flex flex-col items-center">
                <p className="font-bold text-purple-950 ">Current Player:</p>
                <div className="w-60 h-60 ">
                  <img
                    className="rounded-lg border-2"
                    src={require(`../images/player-${player.ranking}.png`)}
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
                className="w-52 border-2 flex items-center justify-center mx-auto py-3 px-5 rounded-lg bg-cream hover:bg-blue"
                onClick={handleSkipButton}
              >
                Skip player
              </button>
            </div>
          </div>
          <div name="right-column ">
            <div className="box bg-cream rounded-lg ml-5 mr-5 w-80 h-96 pt-10">
              <div className="w-full h-40 mt-9">
                <div className="border-2 bg-white w-2/3 flex mx-auto items-center h-full justify-center pt-3 rounded-lg ">
                  {guessedPlayers.length < 20 &&
                  game.currentPlayer.guessesLeft !== 0 ? (
                    <p className="text-3xl">Score: {score}</p>
                  ) : (
                    <p className="text-3xl">Final Score: {score}</p>
                  )}
                </div>
                <div>
                  {game.currentPlayer.guessesLeft === 0 ? (
                    <p className="text-center flex mx-auto w-3/ pt-6">
                      Bad luck, a bit more practise and you'll get there!
                    </p>
                  ) : guessedPlayers.length < 20 ? (
                    <p className="text-center flex mx-auto w-3/4 pt-6">
                      You have {guessesLeft} attempts left to guess{" "}
                      {player.firstName}'s ranking. (psst, it's {player.ranking}{" "}
                      🤫)
                    </p>
                  ) : (
                    <p className="text-center pt-6">
                      Well done, you finished the game!!
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-3">
              <button
                className="w-52 border-2 flex items-center justify-center mx-auto py-3 rounded-lg  bg-coral hover:bg-blue"
                onClick={handleRestartButton}
              >
                Start Game Again
              </button>
            </div>
          </div>
        </div>
        <ProgressBar />
        <div className="pt-20 pb-10 md:flex md:justify-center grid grid-cols-3 "></div>
      </div>

      {/* This is the popup for when the game is over */}
      <Modal
        show={showGameOver}
        onHide={handleNewGame}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="bg-cream">
          <Modal.Title>Game Over!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-cream">
          <p>Your final score is: {score}</p>
          {game.score < 20 ? (
            <p>You really should get to know the WTA players better</p>
          ) : game.score < 100 ? (
            <p>You did okay, but I'd suggest you watch a bit more tennis</p>
          ) : game.score >= 100 && game.score < 180 ? (
            <p>not bad but still quite a bit of room for improvement</p>
          ) : game.score >= 180 && game.score < 200 ? (
            <p>Great Score! You know your stuff!</p>
          ) : (
            game.score === 200(<p>You absolutely nailed it!!!</p>)
          )}
        </Modal.Body>
        <Modal.Footer className="bg-cream">
          <Button
            variant="secondary"
            onClick={handleNewGame}
            className="bg-blue"
          >
            Play Again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Play;
