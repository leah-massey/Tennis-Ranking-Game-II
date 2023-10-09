import HowToPlayPopup from "./howToPlayPopup";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                <Link
                  to="/play"
                  className="text-cream no-underline tracking-wide"
                >
                  Play
                </Link>
              </li>
              <p className="pt-2">|</p>
              <li className="tracking-wide px-5">
                <HowToPlayPopup />
              </li>
              <p className="pt-2">|</p>
              <li className="  px-5 pt-2">
                <Link
                  to="/login"
                  className="text-cream no-underline tracking-wide"
                >
                  Login
                </Link>
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
    </nav>
  );
}
