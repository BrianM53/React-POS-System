import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Validates edited employee data for submission based on input lengths.
 * @function validateInput
 * @param {Object} editedEmployeeData - The edited employee data to be validated.
 * @returns {boolean} - True if all required fields have non-empty values, false otherwise.
 */
function validateInput(editedEmployeeData) {
  return (
    editedEmployeeData.email.length > 0 &&
    editedEmployeeData.username.length > 0 &&
    editedEmployeeData.first_name.length > 0 &&
    editedEmployeeData.last_name.length > 0 &&
    editedEmployeeData.username.length > 0 && 
    editedEmployeeData.password.length > 0
  );
}

/**
 * Renders a button for submitting edited employee data.
 * @function AdminSubmitEditEmployee
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.editedEmployeeData - The edited employee data to be submitted.
 * @returns {JSX.Element} - The JSX markup for the AdminSubmitEditEmployee component.
 */
function AdminSubmitEditEmployee({ editedEmployeeData }) {
  const isInputValid = validateInput(editedEmployeeData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit Edited Employee
    </Button>
  );
}

export default AdminSubmitEditEmployee;