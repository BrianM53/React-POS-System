import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import AdminSubmitManager from "./adminSubmitManager";
import "./adminAdd.css";

function AdminAddManager({ onFinishAddingManager, handleCancelEditing }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [managerData, setManagerData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerData({ ...managerData, [name]: value });
  };

  const addManager = async (e) => {
    e.preventDefault();
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    try 
    {

      // console.log("inside try");

      const response = await axios.post(
        BACKEND_URL + "/adminmanagers",
        managerData
      );

      // console.log("after try");

      // console.log(response.data.message);

      if (response.data.message === "Manager added successfully") 
      {
        setErrorMsg(
          <div style={{ color: "green" }}>Manager added successfully.</div>
        );
        onFinishAddingManager();
      } 
      else if (response.data.message === "Manager already exists") 
      {
        setErrorMsg(
          <div style={{ color: "red" }}>Manager already exists.</div>
        );
      }
    } 
    catch (error) 
    {
      console.error("Error adding manager:", error);
      setErrorMsg(<div style={{ color: "red" }}>Error adding manager.</div>);
    }
  };

  return (
    <div className="add-employee-content">
      <div className="title">Add Manager</div>
      <div className="Login-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing} className="x-out-btn" >X</button>

      <Form className="rounded p-3 p-sm-3" onSubmit={addManager}>
        <FloatingLabel label="First name" className="mb-3">
          <Form.Control
            name="first_name"
            type="text"
            value={managerData.first_name}
            placeholder="First name"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Last name" className="mb-3">
          <Form.Control
            name="last_name"
            type="text"
            value={managerData.last_name}
            placeholder="Last name"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Phone" className="mb-3">
          <Form.Control
            name="phone"
            type="tel"
            maxLength="11"
            value={managerData.phone}
            placeholder="phone"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Email address" className="mb-3">
          <Form.Control
            autoFocus
            name="email"
            type="email"
            value={managerData.email}
            placeholder="Email address"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Username" className="mb-3">
          <Form.Control
            name="username"
            type="text"
            value={managerData.username}
            placeholder="Username"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Password" className="mb-3">
          <Form.Control
            autoFocus
            name="password"
            type="password"
            value={managerData.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <div className="submit">
          <AdminSubmitManager managerData={managerData} />
        </div>
      </Form>
    </div>
  );
}

export default AdminAddManager;
