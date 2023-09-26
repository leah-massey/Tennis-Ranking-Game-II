import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//Creating a static backdrop modal
function HowToPlayPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="flex h-screen bg-blue"
      >
        <Modal.Header closeButton>
          <Modal.Title>How to play</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
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
