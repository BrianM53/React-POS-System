import React from 'react';
import { Button } from "react-bootstrap";
/**
 * Validates manager data for submission based on input lengths.
 * @function validateInput
 * @param {Object} managerData - The manager data to be validated.
 * @returns {boolean} - True if all required fields have non-empty values, false otherwise.
 */
function validateInput(managerData) {
    return (
    managerData.email.length > 0 && 
    managerData.username.length > 0 &&
    managerData.first_name.length > 0 && 
    managerData.last_name.length > 0
    );
}

/**
 * Renders a button for submitting manager data.
 * @function AdminSubmitManager
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.managerData - The manager data to be submitted.
 * @returns {JSX.Element} - The JSX markup for the AdminSubmitManager component.
 */
function AdminSubmitManager({ managerData }) {
  const isInputValid = validateInput(managerData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default AdminSubmitManager;
