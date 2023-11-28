import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'; // Import axios or your preferred HTTP library
import { useUser } from "../utility/userControl";

const GoogleLoginButton = () => {
  const { userRole, setUserRole, userName, setUserName, userEmail, setUserEmail } = useUser();

  const handleSuccess = async (credential) => {
    try {
      var backendURL = 'http://localhost:3001' || process.env.REACT_APP_BACKEND_URL;

      console.log("sending credential response: " + credential);
      await axios.post(backendURL + '/users/auth/google-login', credential);
    } catch (error) {
      console.error("Error validating credentials:", error);
    }
  };

  return (
    <GoogleLogin
      text="signin_with"
      onSuccess={async (credentialResponse) => {
        const result = await handleSuccess(credentialResponse.credential);
        if (result.success) {
          setUserName(result.name);
          setUserEmail(result.email);
        }
        // You can use the 'result' here, such as updating the state or performing other actions.
      }}
      onError={() => { console.log("Login failed"); }}
    />
  );
}

export default GoogleLoginButton;
