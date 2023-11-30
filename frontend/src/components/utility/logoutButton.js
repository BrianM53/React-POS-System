import React from "react";
import { useUser } from "./userControl";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const {
    setUserRole,
    setUserName,
    setUserEmail,
    setEmployeeId,
    handleLogout,
  } = useUser();
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    setUserRole("customer");
    navigate("/");
  };

  return (
    <Button variant="danger" onClick={logout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
