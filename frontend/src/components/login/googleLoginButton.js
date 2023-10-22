import React from "react";
import { GoogleLogin } from '@react-oauth/google';

export function GoogleLoginButton() {
  return (
    <GoogleLogin
      text="signup_with"
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}