import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { handleSubmit, LoginButton } from "./loginButton";
import GoogleLoginButton from "./googleLoginButton";
import { useUser } from "../utility/userControl";

import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { userRole, setUserRole } = useUser();

  const [loginMsg, setLoginMsg] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const login = async (event) => {
    const { isCashier, isManager } = await handleSubmit(event, loginData);
    console.log("login attempt with role " + userRole);
    if (isManager) {
      setUserRole("manager");
      navigate("/manager");
    } else if (isCashier) {
      setUserRole("cashier");
      navigate("/cashier");
    } else {
      setLoginMsg(
        <div style={{ color: "red" }}>Invalid email or password.</div>
      );
    }
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <div className="Login-msg">{loginMsg}</div>
        <Form className="rounded p-3 p-sm-3" onSubmit={login}>
          <FloatingLabel label="Email address" className="mb-3">
            <Form.Control
              autoFocus
              name="email"
              type="email"
              value={loginData.email}
              placeholder="Email address"
              onChange={handleInputChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Password" className="mb-3">
            <Form.Control
              name="password"
              type="password"
              value={loginData.password}
              placeholder="Password"
              onChange={handleInputChange}
            />
          </FloatingLabel>

          <LoginButton loginData={loginData} />
        </Form>

        <p>or</p>
        <GoogleLoginButton setLoginMsg={setLoginMsg} />
      </header>
    </div>
  );
}

export default Login;
