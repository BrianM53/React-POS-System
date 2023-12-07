import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Validates edited manager data for submission based on input lengths.
 * @function validateInput
 * @param {Object} editedManagerData - The edited manager data to be validated.
 * @returns {boolean} - True if all required fields have non-empty values, false otherwise.
 */
function validateInput(editedManagerData) {
  return (
    editedManagerData.email.length > 0 &&
    editedManagerData.username.length > 0 &&
    editedManagerData.first_name.length > 0 &&
    editedManagerData.last_name.length > 0 &&
    editedManagerData.username.length > 0 && 
    editedManagerData.password.length > 0
  );
}

/**
 * Renders a button for submitting edited manager data.
 * @function AdminSubmitEditManager
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.editedManagerData - The edited manager data to be submitted.
 * @returns {JSX.Element} - The JSX markup for the AdminSubmitEditManager component.
 */
function AdminSubmitEditManager({ editedManagerData }) {
  const isInputValid = validateInput(editedManagerData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit Edited Manager
    </Button>
  );
}

export default AdminSubmitEditManager;