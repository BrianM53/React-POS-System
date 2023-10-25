import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import { handleRegister, RegisterButton } from "./registerButton";

import "bootstrap/dist/css/bootstrap.css";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMsg, setRegisterMsg] = useState("");

  const login = (event) => { handleRegister(event, email, password, setRegisterMsg); event.preventDefault(); };
  
  return (
    <div className="Register">
      <header className="Register-header">
        <p>
          This is the Register page
        </p>
        <div className="Register-msg">{registerMsg}</div>
        <Form className="rounded p-3 p-sm-3" onSubmit={login}>
        <FloatingLabel label="First name" className="mb-3">
            <Form.Control autoFocus type="name" value={firstName} placeholder="First name" onChange={(event) => setFirstName(event.target.value)}/>
          </FloatingLabel>

          <FloatingLabel label="Last name" className="mb-3">
            <Form.Control type="name" value={lastname} placeholder="Last name" onChange={(event) => setLastName(event.target.value)}/>
          </FloatingLabel>

          <FloatingLabel label="Email address" className="mb-3">
            <Form.Control autoFocus type="email" value={email} placeholder="Email address" onChange={(event) => setEmail(event.target.value)}/>
          </FloatingLabel>

          <FloatingLabel label="Password" className="mb-3">
            <Form.Control type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
          </FloatingLabel>
          
          <RegisterButton email={email} password={password} />
        </Form>

        <p>or</p>
        <GoogleLogin
          text="signup_with"
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Register Failed');
          }}
        />

        <div className="Login-btn">
          Already have an account?
          <Link to='/login' className="link">Login</Link>
        </div>
      </header>
    </div>
  );
}

export default Register;
