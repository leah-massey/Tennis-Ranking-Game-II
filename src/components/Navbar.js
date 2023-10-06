import HowToPlayPopup from "./howToPlayPopup";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav>
      <div className=" w-full h-[40px] px-10 bg-forest text-cream font-mono">
        <div className="max-w-screen-xl flex justify-center flex-wrap items-center   mx-auto">
          <div className="flex justify-center items-center text-center mx-auto">
            <ul className=" hidden justify-center md:flex p-0 m-0">
              <li className=" px-5 pt-2">
                <p>Play</p>
              </li>
              <p className="pt-2">|</p>
              <li className=" px-5">
                <HowToPlayPopup />
              </li>
              <p className="pt-2">|</p>
              <li className="  px-5 pt-2">
                <p>Login</p>
              </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10 pt-2">
              {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu  */}
            <ul
              className={
                !nav
                  ? "hidden"
                  : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-cream bg-blue"
              }
            >
              <li className="py-6 text 4xl">
                <HowToPlayPopup onClick="handleClick" />
              </li>
              <li>
                <Nav>
                  <Nav.Item>
                    <Nav.Link className="text-blue" href="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </li>
              <li>
                <Nav className="text-cream">
                  <Nav.Item>
                    <Nav.Link href="/">Play</Nav.Link>
                  </Nav.Item>
                </Nav>
              </li>
            </ul>
          </div>
        </div>
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
    </nav>
  );
}
