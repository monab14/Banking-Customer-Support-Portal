import React from 'react';

const ConfirmationModal = ({ isOpen, option, onConfirm, onCancel}) => {
  return (
   <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <p style = {{color: '#871f40'}} >Do you want to continue to Internat Banking Login page?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              No
            </button>
            <button type="button" className="btn btn-primary" style={{ backgroundColor: '#871f40' }} onClick={onConfirm}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
