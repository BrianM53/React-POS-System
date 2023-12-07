import React from "react";
import { useUser } from "./userControl";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

/**
 * Logout button component for user logout functionality.
 * @component
 * @returns {React.Component} - Logout button component.
 */
function LogoutButton() {
  const {
    setUserRole,
    setUserName,
    setUserEmail,
    setEmployeeId,
    handleLogout,
  } = useUser();
  const navigate = useNavigate();

   /**
   * Handles the logout process, resetting user state and navigating to the home page or login page.
   * @function
   */
  const logout = () => {
    // Call the handleLogout function from useUser if it needs to perform any cleanup actions
    if (handleLogout) {
      handleLogout();
    }

    // Reset the user state to their default values
    setUserRole("customer");
    setUserName("John Doe");
    setUserEmail("john@doe.com");
    setEmployeeId(null);

    // Navigate to the home page or login page
    navigate("/");
  };

  return (
    <Button variant="danger" onClick={logout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
