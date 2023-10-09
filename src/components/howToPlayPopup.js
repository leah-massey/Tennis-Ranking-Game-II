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
        centered
        id="bootstrap-overrides"
        className="font-mono"
      >
        <Modal.Header closeButton className="bg-cream">
          <Modal.Title>How to play 🎾</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-cream">
          <p>
            You have 10 attempts to guess each player's ranking. Players are all
            ranked within the top 20.
          </p>
          <p>
            Once you have guessed a player, a new player will appear for you to
            guess.
          </p>
          <p> On guessing all players, the game ends 🏆. </p>
          <p> (if you run out of guesses, the game also ends 💀) </p>
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
// import { useState } from "react";
// import Modal from "react-modal";

// function HowToPlayPopup() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   // Style for the modal
//   const customStyles = {
//     content: {
//       width: "50%", // Adjust the width as needed
//       margin: "auto",
//     },
//     overlay: {
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//     },
//   };

//   return (
//     <>
//       <button onClick={handleShow} className="pt-2">
//         How To Play
//       </button>

//       <Modal
//         isOpen={show}
//         onRequestClose={handleClose}
//         style={customStyles}
//         contentLabel="How to Play Modal"
//       >
//         <div className="bg-cream">
//           <h2>How to play</h2>
//         </div>
//         <div className="bg-cream">
//           <p>
//             This game is quite simple: You have 10 attempts to guess each
//             player's ranking. Players are all within the top 20.
//           </p>
//           <p>
//             Once you have guessed a player, a new player will appear for you to
//             guess.
//           </p>
//           <p>On guessing all players, the game ends.</p>
//           <p>On running out of guesses, the game ends.</p>
//           <p>Good Luck!!</p>
//         </div>
//         <div className="bg-cream custom-footer">
//           <button onClick={handleClose} className="bg-blue">
//             Close
//           </button>
//         </div>
//       </Modal>
//     </>
//   );
// }

// export default HowToPlayPopup;
