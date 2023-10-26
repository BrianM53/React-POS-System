import React from 'react';
import { useUser } from './userControl';
import Button from 'react-bootstrap/Button';

function LogoutButton() {
  const { setUserRole } = useUser();

  const handleLogout = () => {
    setUserRole('customer'); // Set the user role to 'customer'
  };

  return (
    <Button variant="danger" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
