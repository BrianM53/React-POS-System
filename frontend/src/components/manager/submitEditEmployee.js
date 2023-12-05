import React from 'react';
import { Button } from 'react-bootstrap';

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

function SubmitEditEmployee({ editedEmployeeData }) {
  const isInputValid = validateInput(editedEmployeeData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit Edited Employee
    </Button>
  );
}

export default SubmitEditEmployee;