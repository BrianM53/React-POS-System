import React from 'react';
import { Button } from "react-bootstrap";

/**
 * Validates customer data for submission based on input lengths.
 * @function validateInput
 * @param {Object} editedCustomerData - The customer data to be validated.
 * @returns {boolean} - True if all required fields have non-empty values, false otherwise.
 */
function validateInput(editedCustomerData) {
  return (
    editedCustomerData.email.length > 0 &&
    editedCustomerData.first_name.length > 0 &&
    editedCustomerData.last_name.length > 0 &&
    editedCustomerData.phone.length > 0
  );
}

/**
 * Renders a button for submitting customer data.
 * @function AdminSubmitCustomer
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.customerData - The customer data to be submitted.
 * @returns {JSX.Element} - The JSX markup for the AdminSubmitCustomer component.
 */
function AdminSubmitCustomer({ customerData }) { 
  const isInputValid = validateInput(customerData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default AdminSubmitCustomer;
