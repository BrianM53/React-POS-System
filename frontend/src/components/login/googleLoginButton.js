import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'; // Import axios or your preferred HTTP library

const GoogleLoginButton = () => {
  const handleSuccess = (credentialResponse) => {
    // Send the credentialResponse to the backend
    // axios.post('http://localhost:3001/', credentialResponse)
    //   .then(response => {
    //     // Handle the response from the backend if needed
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.error('Error sending credential to the backend:', error);
    //   });
  };

  return (
    <GoogleLogin
      text="signin_with"
      onSuccess={handleSuccess}
      onError={() => { console.log("Login failed"); }}
    />
  );
}

export default GoogleLoginButton;
