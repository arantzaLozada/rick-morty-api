import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, closeModal }) {
  const exitModal = () => {
    closeModal(false);
  };

  return ReactDOM.createPortal(
    <div className="bg-violet-500/50 fixed min-h-screen top-0 left-0 right-0">
      <strong className="flex justify-end w-full mt-10">
        <button
          onClick={exitModal}
          className="mr-20 text-white border-2 rounded-full w-10 h-10"
        >
          &#x2715;
        </button>
      </strong>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
