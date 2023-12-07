import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Validates the input data for editing an employee.
 * @function validateInput
 * @param {Object} editedEmployeeData - The data of the edited employee.
 * @returns {boolean} - Indicates whether the input is valid or not.
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
 * Component for submitting the edited employee data.
 * @component
 * @function SubmitEditEmployee
 * @param {Object} props - Component props.
 * @param {Object} props.editedEmployeeData - The data of the edited employee.
 * @returns {JSX.Element} - Rendered component.
 */
function SubmitEditEmployee({ editedEmployeeData }) {
  /**
   * Indicates whether the input data is valid for submission.
   * @type {boolean}
   */
  const isInputValid = validateInput(editedEmployeeData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit Edited Employee
    </Button>
  );
}

export default SubmitEditEmployee;