import React from 'react';
import Alert from 'react-bootstrap/Alert';

function ErrorMessage({ userRole, requiredRole }) {
  return (
    <Alert variant="danger">
      {userRole}'s can't access the {requiredRole} interface.
    </Alert>
  );
}

export default ErrorMessage;