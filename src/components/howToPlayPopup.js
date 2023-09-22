import React from "react";

function HowToPlayPopup(props) {
  return props.trigger ? (
    <div className="fixed h-1/2 w-full bg-coral flex items-center justify-center align-middle content-center ">
      <div className="h-full popup-inner flex bg-cream items-center w-2/3  justify-center">
        <button className="close-button fixed top-5 right-5 ">X</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default HowToPlayPopup;
