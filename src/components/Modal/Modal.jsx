import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ close, children }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.addEventListener('keydown', closeModal);
  }, []);

  return createPortal(
    <div onClick={closeModal} className={css.overlay}>
      <div className={`${css.modal} ${css.neonBorder}`}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
