import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import { handleLogin, LoginButton } from "./loginButton";

import "bootstrap/dist/css/bootstrap.css";
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  /**
   * @var variable stores the variable specified 
   * @function setVariable changes the value of the variable
   */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  const login = (event) => { handleLogin(event, email, password, setLoginMsg); event.preventDefault(); };
  
  return (
    <div className="Login">
      <header className="Login-header">
        <p>
          This is the Login page
        </p>
        <div className="Login-msg">{loginMsg}</div>
        <Form className="rounded p-3 p-sm-3" onSubmit={login}>
          <FloatingLabel label="Email address" className="mb-3">
            <Form.Control autoFocus type="email" value={email} placeholder="Email address" onChange={(event) => setEmail(event.target.value)}/>
          </FloatingLabel>

          <FloatingLabel label="Password" className="mb-3">
            <Form.Control type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
          </FloatingLabel>
          
          <LoginButton email={email} password={password} />
        </Form>

        <p>or</p>
        <GoogleLogin
          text="signin_with"
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />

        <div className="Register-btn">
          Don't have an account?
          <Link to="/register" className="link">Register</Link>
        </div>
      </header>
    </div>
  );
}

export default Login;
