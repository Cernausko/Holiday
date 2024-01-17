import { useState } from "react";
import './Modal.scss';
import 'bootstrap/js/src/modal';

export  const Modal = ({children})=> {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };



  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="200" fill="currentColor" className="bi bi-plus-circle-fill text-secondary" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
    </svg>
      </button>
      

      {modal && (
        <div className="modal show-modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            {children}

            <button className="close-modal" onClick={toggleModal}>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="50" fill="currentColor" className="bi bi-x-circle text-danger" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}