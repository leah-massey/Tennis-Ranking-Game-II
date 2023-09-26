import HowToPlayPopup from "./howToPlayPopup";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <div className="w-full h-[40px] justify-between items-center px-10 bg-forest text-cream">
        <ul>
          <HowToPlayPopup />
          <Nav
            activeKey="/login"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </ul>
      </div>

      {/* <HowToPlayPopup trigger={showPopup} setTrigger={setShowPopup}>
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
      </HowToPlayPopup> */}
    </div>
  );
}
