import React from "react";

function HowToPlayPopup(props) {
  return props.trigger ? (
    <div className="fixed h-1/2 w-full  flex items-center justify-center align-middle content-center ">
      <div className="h-full popup-inner flex bg-cream items-center w-2/3  justify-center">
        <button className="close-button absolute top-0 right-64 h-16 w-16 ">
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default HowToPlayPopup;
