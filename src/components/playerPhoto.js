const Game = require("./Game");

function setPlayerPhoto(playerPhotoLocal, numberToGuessLocal) {
  playerPhotoLocal.src = `./playerImages/player-${numberToGuessLocal}.png`;
}
