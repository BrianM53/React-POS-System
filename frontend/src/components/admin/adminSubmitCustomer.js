import React from 'react';
import { Button } from "react-bootstrap";

function validateInput(editedCustomerData) {
  return (
    editedCustomerData.email.length > 0 &&
    editedCustomerData.first_name.length > 0 &&
    editedCustomerData.last_name.length > 0 &&
    editedCustomerData.phone.length > 0
  );
}

function AdminSubmitCustomer({ customerData }) { 
  const isInputValid = validateInput(customerData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default AdminSubmitCustomer;
