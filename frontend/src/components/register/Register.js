import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import { handleSubmit, RegisterButton } from "./registerButton";

import "bootstrap/dist/css/bootstrap.css";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [registerMsg, setRegisterMsg] = useState("");

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const register = (event) => { handleSubmit(event, registerData, setRegisterMsg); event.preventDefault(); };
  
  return (
    <div className="Register">
      <header className="Register-header">
        <p>
          This is the Register page
        </p>
        <div className="Register-msg">{registerMsg}</div>
        <Form className="rounded p-3 p-sm-3" onSubmit={register}>
        <FloatingLabel label="First name" className="mb-3">
            <Form.Control autoFocus name="firstName" type="text" value={registerData.firstName} placeholder="First name" onChange={handleInputChange}/>
          </FloatingLabel>

          <FloatingLabel label="Last name" className="mb-3">
            <Form.Control name="lastName" type="text" value={registerData.lastName} placeholder="Last name" onChange={handleInputChange}/>
          </FloatingLabel>

          <FloatingLabel label="Email address" className="mb-3">
            <Form.Control name="email" type="email" value={registerData.email} placeholder="Email address" onChange={handleInputChange}/>
          </FloatingLabel>

          <FloatingLabel label="Password" className="mb-3">
            <Form.Control name="password" type="password" value={registerData.password} placeholder="Password" onChange={handleInputChange}/>
          </FloatingLabel>
          
          <RegisterButton registerData={registerData} />
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
