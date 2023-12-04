import React from 'react';
import { Button } from 'react-bootstrap';

function validateInput(editedManagerData) {
  return (
    editedManagerData.email.length > 0 &&
    editedManagerData.username.length > 0 &&
    editedManagerData.first_name.length > 0 &&
    editedManagerData.last_name.length > 0 &&
    editedManagerData.username.length > 0 && 
    editedManagerData.password.length > 0
  );
}

function AdminSubmitEditManager({ editedManagerData }) {
  const isInputValid = validateInput(editedManagerData);

  return (
    <Button type="submit" variant="light" disabled={!isInputValid}>
      Submit Edited Manager
    </Button>
  );
}

export default AdminSubmitEditManager;