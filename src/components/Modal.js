import ReactModal from 'react-modal';
import React from 'react';

const modalStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, .7)'
  },
  content: {
    margin: '0 auto',
    maxWidth: '580px',
    left: 0,
    right: 0,
    border: 0,
    borderRadius: '5px',
    padding: '24px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }
};

function Modal ({ children, ...rest }) {
  return (
    <ReactModal
      style={modalStyles}
      closeTimeoutMS={500}
      {...rest}
    >
      {children}
    </ReactModal>
  )
}

export default Modal;
