import React from 'react';
import "./remove.css";

/**
 * Component for displaying a confirmation modal for item removal.
 * @component
 * @function DeleteConfirmation
 * @param {Object} props - The component props.
 * @param {Function} props.onConfirm - Callback function when confirming item removal.
 * @param {Function} props.onCancel - Callback function when canceling item removal.
 * @returns {JSX.Element} - Rendered component.
 */
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