import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Form, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import './Login.css';

function Login() {

  // use this to navigate between pages
  const navigate = useNavigate();
  
  /**
   * @var username stores the username entered
   * @var password stores the password entered
   * @function setUsername changes the value of username
   * @function setPassword changes the value of password
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * @var loginMsg stores the message outputted on login attempt.
   * @function setLoginMsg changes the value stored in loginMsg
   */
  const [loginMsg, setLoginMsg] = useState("");

  // access control variables
  var isEmployee, isManager;

  function validateInput() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    // use this to prevent the browser from doing anything
    // e.g. save credential prompt, page reload, etc
    event.preventDefault();
    
    if (validateCredentials()) {
    } else {
      setLoginMsg(
        <span style={{ color: "red" }}>Invalid username or password.</span>
      );
    }
  }
  
  function validateCredentials() {
  }
  
  return (
    <div className="Login">
      <header className="Login-header">
        <p>
          This is the Login page
          <br />
          Use credentials root / root for testing purposes
        </p>

        <div className="Login-msg">{loginMsg}</div>
        
        <Form className="rounded p-3 p-sm-3" onSubmit={handleSubmit}>
          <Form.Group>
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
              {/**
               * @param autofocus automatically focus on the username text field
               * @param value binds the text field to username variable
               * @param placeholder the gray text shown when input is empty
               * @func onChange calls setUsername to change username value
               * */
              }
              <Form.Control autoFocus type="username" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
            </FloatingLabel>
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
              {/**
               * @param type enables bootstrap input controls for password fields
               * @param value binds the text field to password variable
               * @param placeholder the gray text shown when input is empty
               * @func onChange calls setPassword to change password value
               * */
              }
              <Form.Control type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
            </FloatingLabel>
          </Form.Group>

          {/* only allow submission if the credential fields are non-empty*/}
          <Button type="submit" variant="light" disabled={!validateInput()}>Login</Button>

        </Form>
      </header>
    </div>
  );
}

export default Login;
