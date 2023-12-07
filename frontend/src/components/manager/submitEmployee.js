import React from 'react';
import { Button } from "react-bootstrap";

/**
 * Validates the input data for submitting an employee.
 * @function validateInput
 * @param {Object} employeeData - The data of the employee.
 * @returns {boolean} - Indicates whether the input is valid or not.
 */
function validateInput(employeeData) {
    return employeeData.email.length > 0 && 
    employeeData.username.length > 0 &&
    employeeData.first_name.length > 0 && 
    employeeData.last_name.length > 0 &&
    employeeData.username.length > 0 &&
    employeeData.password.length > 0;
}

/**
 * Component for submitting employee data.
 * @component
 * @function SubmitEmployee
 * @param {Object} props - Component props.
 * @param {Object} props.employeeData - The data of the employee.
 * @returns {JSX.Element} - Rendered component.
 */
function SubmitEmployee({ employeeData }) {
  /**
   * Indicates whether the input data is valid for submission.
   * @type {boolean}
   */
  const isInputValid = validateInput(employeeData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitEmployee;