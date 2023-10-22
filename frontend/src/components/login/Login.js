import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import jwt_decode from "jwt-decode";

import { handleLogin, LoginButton } from "./loginButton";
import { GoogleLoginButton } from "./googleLoginButton";

import "bootstrap/dist/css/bootstrap.css";
import './Login.css';

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
          <Form.Group>
            <FloatingLabel label="Email address" className="mb-3">
              {/**
               * @augments autofocus automatically focus on the email text field
               * @augments value binds the text field to email variable
               * @augments placeholder the gray text shown when input is empty
               * @func onChange calls setEmail to change email value
               * */ }
              <Form.Control autoFocus type="email" value={email} placeholder="Email address" onChange={(event) => setEmail(event.target.value)}/>
            </FloatingLabel>
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <FloatingLabel label="Password" className="mb-3">
              {/**
               * @augments type enables bootstrap input controls for password fields
               * @augments value binds the text field to password variable
               * @augments placeholder the gray text shown when input is empty
               * @func onChange calls setPassword to change password value
               * */ }
              <Form.Control type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
            </FloatingLabel>
          </Form.Group>
          
          <LoginButton email={email} password={password} />
        </Form>

        <div className="Sign-in-google">Don't have an account?</div>
        <GoogleLoginButton />
      </header>
    </div>
  );
}

export default Login;
