import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";

//Creating a static backdrop modal
function GameOverPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={showGameOver}
        onHide={handleGame}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="bg-cream">
          <Modal.Title>Game Over!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-cream">
          <p>End of game! Your final score is:</p>
        </Modal.Body>
        <Modal.Footer className="bg-cream">
          <Button variant="secondary" onClick={handleGame} className="bg-blue">
            Play Again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GameOverPopup;
