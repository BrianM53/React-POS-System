import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Validates edited customer data for submission based on input lengths.
 * @function validateInput
 * @param {Object} editedCustomerData - The edited customer data to be validated.
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
 * Renders a button for submitting edited customer data.
 * @function AdminSubmitEditCustomer
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.editedCustomerData - The edited customer data to be submitted.
 * @returns {JSX.Element} - The JSX markup for the AdminSubmitEditCustomer component.
 */
function AdminSubmitEditCustomer({ editedCustomerData }) {
  const isInputValid = validateInput(editedCustomerData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit Edited Customer
    </Button>
  );
}

export default AdminSubmitEditCustomer;