import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import SubmitEmployee from "./submitEmployee";

import "./add.css";

function AddEmployee({ onFinishAddingEmployee, handleCancelEditing }) 
{
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

      console.log("inside the try");

      const response = await axios.post(
        BACKEND_URL + "/employees/",
        employeeData
      );

      console.log("after the try");

      if (response.data.message === "Employee added successfully") 
      {
        setErrorMsg(
          <div style={{ color: "green" }}>Employee added successfully.</div>
        );

        onFinishAddingEmployee();
      } 
      else if (response.data.message === "Employee already exists") 
      {
        setErrorMsg(
          <div style={{ color: "red" }}>Employee already exists.</div>
        );
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      setErrorMsg(<div style={{ color: "red" }}>Error adding employee.</div>);
    }
  };

  return (
    <div className="add-employee-content">
      <div className="title">Add Employee</div>
      <div className="Login-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing} className="x-out-btn" >X</button>

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
          <SubmitEmployee employeeData={employeeData}/>
        </div>
      </Form>
    </div>
  );
}

export default AddEmployee;