import React from 'react';

function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div className="remove-confirmation">
      <div className="remove-question">Are you sure you want to remove?</div>
      <button onClick={onConfirm} className="remove-btn">Remove</button>
      <button onClick={onCancel} className="cancel-btn" >Cancel</button>
    </div>
  );
}

export default DeleteConfirmation;