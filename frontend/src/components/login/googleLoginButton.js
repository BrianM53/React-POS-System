import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios"; // Import axios or your preferred HTTP library
import { useUser } from "../utility/userControl";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = ({ setLoginMsg }) => {
  const {
    userRole,
    setUserRole,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
  } = useUser();
  const navigate = useNavigate();

  const handleSuccess = async (credential) => {
    try {
      var backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

      // console.log("sending credential response: " + credential);

      // return the response to const result = await handleSucces(...)
      const response = await axios.post(
        backendURL + "/users/auth/google-login",
        credential
      );
      return response.data;
    } catch (error) {
      console.error("Error validating credentials:", error);
    }
  };

  return (
    <GoogleLogin
      text="signin_with"
      onSuccess={async (credentialResponse) => {
        const result = await handleSuccess(credentialResponse.credential);
        if (result) {
          if (result.success && result.isManager) {
            setUserName(result.name);
            setUserEmail(result.email);

            console.log("success manager", userName, userEmail);

            setUserRole("manager");
            navigate("/manager");
          } else if (result.success && result.isCashier) {
            setUserName(result.name);
            setUserEmail(result.email);

            console.log("success cashier", userName, userEmail);

            setUserRole("cashier");
            navigate("/cashier");
          } else if (result.success && result.isAdmin) {
            setUserName(result.name);
            setUserEmail(result.email);

            console.log("success admin", userName, userEmail);

            setUserRole("admin");
            navigate("/admin");
          } else {
            setLoginMsg(
              <div style={{ color: "red" }}>
                {result.email} cannot be authenticated.
              </div>
            );
          }
        } else {
          console.log("unsuccessful google login");
        }
      }}
      onError={() => {
        console.log("Login failed");
      }}
    />
  );
};

export default GoogleLoginButton;
