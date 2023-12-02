import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import SubmitButton from "./submitEmployee";

function AddEmployee({ onFinishAddingEmployee }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [employeeData, setEmployeeData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const addEmployee = async (e) => {
    e.preventDefault();
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  
    try {
      const response = await axios.post(
        BACKEND_URL + "/employees",
        employeeData
      );
  
      if (response.status === 200) {
        setErrorMsg(
          <div style={{ color: "green" }}>Employee added successfully.</div>
        );
        onFinishAddingEmployee();
      } else {
        setErrorMsg(<div style={{ color: "red" }}>Error adding employee.</div>);
      }
    } catch (error) {
      console.error("Error adding employee:", error);
  
      // Check if there's a response from the server
      if (error.response) {
        setErrorMsg(
          <div style={{ color: "red" }}>{error.response.data.message}</div>
        );
      } else {
        setErrorMsg(<div style={{ color: "red" }}>Error adding employee.</div>);
      }
    }
  };

  return (
    <div className="add-employee-content">
      <div className="Login-msg">{errorMsg}</div>

      <Form className="rounded p-3 p-sm-3" onSubmit={addEmployee}>
        <FloatingLabel label="First name" className="mb-3">
          <Form.Control
            name="first_name"
            type="text"
            value={employeeData.first_name}
            placeholder="First name"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Last name" className="mb-3">
          <Form.Control
            name="last_name"
            type="text"
            value={employeeData.last_name}
            placeholder="Last name"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Phone" className="mb-3">
          <Form.Control
            name="phone"
            type="tel"
            maxLength="11"
            value={employeeData.phone}
            placeholder="phone"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Email address" className="mb-3">
          <Form.Control
            autoFocus
            name="email"
            type="email"
            value={employeeData.email}
            placeholder="Email address"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Username" className="mb-3">
          <Form.Control
            name="username"
            type="text"
            value={employeeData.username}
            placeholder="Username"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Password" className="mb-3">
          <Form.Control
            autoFocus
            name="password"
            type="password"
            value={employeeData.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <div className="submit">
          <SubmitButton employeeData={employeeData}/>
        </div>
      </Form>
    </div>
  );
}

export default AddEmployee;
