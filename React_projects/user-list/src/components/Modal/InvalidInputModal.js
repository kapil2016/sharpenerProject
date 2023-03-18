import React from 'react';
import Modal from 'react-modal';
import './InvalidInputModal.css'

// Modal.setAppElement('#rot'); // Set the root element for accessibility

const InvalidInputModal = ({ isOpen, onRequestClose ,message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="invalid-input-modal"
      overlayClassName="invalid-input-modal-overlay"
    >
      <h2 className="invalid-input-modal__title">Invalid Input</h2>
      <p className="invalid-input-modal__message">
        {message}
      </p>
      <button className="invalid-input-modal__close-btn" onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
};

export default InvalidInputModal;
