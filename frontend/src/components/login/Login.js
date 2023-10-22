import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";

import { validateInput, handleSubmit } from "./authentication";

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
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              {/**
               * @param autofocus automatically focus on the email text field
               * @param value binds the text field to email variable
               * @param placeholder the gray text shown when input is empty
               * @func onChange calls setEmail to change email value
               * */
              }
              <Form.Control autoFocus type="email" value={email} placeholder="Email address" onChange={(event) => setEmail(event.target.value)}/>
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
          <Button type="submit" variant="light" disabled={!validateInput(email, password)}>Login</Button>

        </Form>
      </header>
    </div>
  );
}

export default Login;
