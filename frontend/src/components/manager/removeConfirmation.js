import React from 'react';
import "./remove.css";

function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div className="remove-confirmation">
      <div className="remove-question">Are you sure you want to remove?</div>
      <div className="btn-container">
        <button onClick={onCancel} className="cancel-btn" >Cancel</button>
        <button onClick={onConfirm} className="remove-btn">Remove</button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;