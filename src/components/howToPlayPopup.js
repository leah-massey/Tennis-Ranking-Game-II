import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";

//Creating a static backdrop modal
function HowToPlayPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="pt-2">
        How To Play
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // className=" bg-blue absolute w-2/3 top-0 h-40 mt-60"
        centered
      >
        <Modal.Header closeButton className="bg-cream">
          <Modal.Title>How to play</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-cream">
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
          <p> Good Luck!! </p>
        </Modal.Body>
        <Modal.Footer className="bg-cream">
          <Button variant="secondary" onClick={handleClose} className="bg-blue">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HowToPlayPopup;

// function HowToPlayPopup(props) {
//   return props.trigger ? (
//     <div className="fixed h-screen w-screen bg-cream z-50">
//       <div
//         className="fixed h-1/2 w-full
//      flex items-center justify-center align-middle content-center "
//       >
//         <div className="h-full popup-inner flex bg-blue items-center w-2/3  justify-center">
//           <button
//             className="close-button absolute top-0 right-64 h-16 w-16 "
//             onClick={() => props.setTrigger(false)}
//           >
//             close
//           </button>
//           {props.children}
//         </div>
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// }

// export default HowToPlayPopup;
