import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'; // Import axios or your preferred HTTP library

const GoogleLoginButton = () => {
  const handleSuccess = async (credential) => {
    try {
      console.log("sending credential response: " + credential);
      await axios.post('${process.env.REACT_APP_BACKEND_URL}/users/auth/google-login', credential);
    } catch (error) {
      console.error("Error validating credentials:", error);
    }
  };

  return (
    <GoogleLogin
      text="signin_with"
      onSuccess={async (credentialResponse) => {
        const result = await handleSuccess(credentialResponse.credential);
        // You can use the 'result' here, such as updating the state or performing other actions.
      }}
      onError={() => { console.log("Login failed"); }}
    />
  );
}

export default GoogleLoginButton;
