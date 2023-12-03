import React from 'react';
import { Button } from "react-bootstrap";

function validateInput(employeeData) {
    return employeeData.email.length > 0 && 
    employeeData.username.length > 0 &&
    employeeData.first_name.length > 0 && 
    employeeData.last_name.length > 0;
}

function SubmitEmployee({ employeeData }) {
  const isInputValid = validateInput(employeeData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default SubmitEmployee;