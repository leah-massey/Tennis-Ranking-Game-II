import HowToPlayPopup from "./howToPlayPopup";
import { useState } from "react";

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div className="w-full h-[40px] flex justify-between items-center px-10 bg-forest text-cream">
        <ul className="hidden md:flex">
          <li className="px-4 tracking-wide">
            <button className="border-2" onClick={() => setShowPopup(true)}>
              How To Play
            </button>
          </li>
        </ul>
      </div>
      <HowToPlayPopup trigger={showPopup}>
        <p>this is the popup</p>
      </HowToPlayPopup>
    </div>
  );
}
