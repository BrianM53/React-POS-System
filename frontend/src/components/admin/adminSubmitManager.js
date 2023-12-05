import React from 'react';
import { Button } from "react-bootstrap";

function validateInput(managerData) {
    return (
    managerData.email.length > 0 && 
    managerData.username.length > 0 &&
    managerData.first_name.length > 0 && 
    managerData.last_name.length > 0
    );
}

function AdminSubmitManager({ managerData }) {
  const isInputValid = validateInput(managerData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit
    </Button>
  );
}

export default AdminSubmitManager;
