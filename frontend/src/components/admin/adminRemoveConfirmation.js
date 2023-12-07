import React from 'react';
import "./adminRemove.css";

/**
 * Renders a confirmation dialog for removing an item, providing options to confirm or cancel the removal.
 * @function AdminRemoveConfirmation
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onConfirm - Callback function triggered when the removal is confirmed.
 * @param {Function} props.onCancel - Callback function triggered when the removal is canceled.
 * @returns {JSX.Element} - The JSX markup for the AdminRemoveConfirmation component.
 */
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