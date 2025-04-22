import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import '../../assets/styles/modal.css';

const Modal = ({ title, content, onClose, onConfirm, isVisible }) => {
  if (!isVisible) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <div>{content}</div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            {onConfirm && <Button label="Confirm" onClick={onConfirm} variant="primary" />}
            <Button label="Close" onClick={onClose} variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired, // Accepts React elements
};


export default Modal;
