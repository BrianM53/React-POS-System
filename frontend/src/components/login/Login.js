import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

import { handleSubmit, LoginButton } from "./loginButton";
import GoogleLoginButton from "./googleLoginButton";

import "bootstrap/dist/css/bootstrap.css";
import './Login.css';

function Login() {
  const [loginMsg, setLoginMsg] = useState("");

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const login = (event) => { handleSubmit(event, loginData, setLoginMsg); event.preventDefault(); };
  
  return (
    <div className="Login">
      <header className="Login-header">
        <div className="Login-msg">{loginMsg}</div>
        <Form className="rounded p-3 p-sm-3" onSubmit={login}>
          <FloatingLabel label="Email address" className="mb-3">
            <Form.Control autoFocus name="email" type="email" value={loginData.email} placeholder="Email address" onChange={handleInputChange}/>
          </FloatingLabel>

          <FloatingLabel label="Password" className="mb-3">
            <Form.Control name="password" type="password" value={loginData.password} placeholder="Password" onChange={handleInputChange}/>
          </FloatingLabel>
          
          <LoginButton loginData={loginData} />
        </Form>

        <p>or</p>
        <GoogleLoginButton />
      </header>
    </div>
  );
}

export default Login;
