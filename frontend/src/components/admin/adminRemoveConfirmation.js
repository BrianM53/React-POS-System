import React from 'react';
import "./adminRemove.css";

function AdminRemoveConfirmation({ onConfirm, onCancel }) {
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

export default AdminRemoveConfirmation;