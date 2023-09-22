import React from "react";

function HowToPlayPopup(props) {
  return props.trigger ? (
    <div className="fixed bg-cream pt-40">
      <div className="popup-inner">
        <button className="close-button ">X</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default HowToPlayPopup;
