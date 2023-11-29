import React from 'react';
import { useUser } from './userControl';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const { userRole, setUserRole, userName, setUserName, userEmail, setUserEmail } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    setUserRole('customer'); // Set the user role to 'customer'
    setUserName('John Doe');
    setUserEmail('john@doe.com');
  };

  return (
    <Button variant="danger" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
