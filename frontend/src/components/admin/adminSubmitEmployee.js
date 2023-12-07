import React from 'react';
import { Button } from "react-bootstrap";

/**
 * Validates employee data for submission based on input lengths.
 * @function validateInput
 * @param {Object} employeeData - The employee data to be validated.
 * @returns {boolean} - True if all required fields have non-empty values, false otherwise.
 */
function validateInput(employeeData) {
    return (
    employeeData.email.length > 0 && 
    employeeData.username.length > 0 &&
    employeeData.first_name.length > 0 && 
    employeeData.last_name.length > 0 &&
    employeeData.password.length > 0 &&
    employeeData.username.length > 0
    );
}

/**
 * Renders a button for submitting employee data.
 * @function AdminSubmitEmployee
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.employeeData - The employee data to be submitted.
 * @returns {JSX.Element} - The JSX markup for the AdminSubmitEmployee component.
 */
function AdminSubmitEmployee({ employeeData }) {
  const isInputValid = validateInput(employeeData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default AdminSubmitEmployee;
