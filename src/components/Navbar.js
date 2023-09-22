import HowToPlayPopup from "./howToPlayPopup";
import { useState } from "react";

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div className="w-full h-[40px] flex justify-between items-center px-10 bg-forest text-cream">
        <div className="hidden md:flex">
          <button className="border-2" onClick={() => setShowPopup(true)}>
            How To Play
          </button>
        </div>
      </div>

      <HowToPlayPopup trigger={showPopup}>
        <div className=" pt-1 w-2/3 items-center justify-center align-middle">
          <h3>HOW TO PLAY</h3>
          <br></br>
          <p>
            This game is quite simple: You have 10 attempts to guess each
            player's ranking. Players are all within the top 20.
          </p>
          <p>
            Once you have guessed a player, a new player will appear for you to
            guess.
          </p>
          <p> On guessing all players, the game ends. </p>
          <p> On running out of guesses, the game ends. </p>
        </div>
      </HowToPlayPopup>
    </div>
  );
}
