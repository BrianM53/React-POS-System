import React from 'react';
import Alert from 'react-bootstrap/Alert';

/**
 * Error message component to display when a user with insufficient role tries to access an interface.
 * @component
 * @param {string} userRole - The role of the user attempting to access the interface.
 * @param {string} requiredRole - The role required to access the interface.
 * @returns {React.Component} - Error message component.
 */
function ErrorMessage({ userRole, requiredRole }) {
  return (
    <Alert variant="danger">
      {userRole}'s can't access the {requiredRole} interface.
    </Alert>
  );
}

export default ErrorMessage;