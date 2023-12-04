import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import AdminSubmitEditManager from "./adminSubmitEditManager";

import "./adminAdd.css";

function AdminEditManager({ selectedRowData, handleFinishEditing, handleCancelEditing }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [editedManagerData, setEditedManagerData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (selectedRowData) {
      setEditedManagerData({ ...selectedRowData });
    }
  }, [selectedRowData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedManagerData({ ...editedManagerData, [name]: value });
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
     const BACKEND_URL =
       process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    try {

      console.log("inside try");
      console.log(editedManagerData);

      const response = await axios.put(
        `${BACKEND_URL}/adminmanagers/${editedManagerData.manager_id}`,
        editedManagerData
      );

      console.log("after try");

      console.log(response.data.message);

      if (response.data.message === "Employee updated successfully") 
      {
        setErrorMsg(
          <div style={{ color: "green" }}>Employee updated successfully.</div>
        );
        handleFinishEditing();
      } 
      else 
      {
        setErrorMsg(
          <div style={{ color: "red" }}>Error updating employee.</div>
        );
      }
    } 
    catch (error) 
    {
      console.error("Error updating employee:", error);
      setErrorMsg(<div style={{ color: "red" }}>Error updating employee.</div>);
    }


  };

  return (
    <div className="edit-employee-popup">
      <div className="title">Edit Employee</div>
      <div className="Login-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing} className="x-out-btn" >X</button>

      <Form className="rounded p-3 p-sm-3" onSubmit={updateEmployee}>

        <FloatingLabel label="First name" className="mb-3">
            <Form.Control
                name="first_name"
                type="text"
                value={editedManagerData.first_name}
                placeholder="First name"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Last name" className="mb-3">
            <Form.Control
                name="last_name"
                type="text"
                value={editedManagerData.last_name}
                placeholder="Last name"
                onChange={handleInputChange}
            />
            </FloatingLabel>

        <FloatingLabel label="Phone" className="mb-3">
            <Form.Control
                name="phone"
                type="tel"
                maxLength="11"
                value={editedManagerData.phone}
                placeholder="Phone"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Email address" className="mb-3">
            <Form.Control
                name="email"
                type="email"
                value={editedManagerData.email}
                placeholder="Email address"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Username" className="mb-3">
            <Form.Control
                name="username"
                type="text"
                value={editedManagerData.username}
                placeholder="Username"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Password" className="mb-3">
            <Form.Control
                name="password"
                type="password"
                value={editedManagerData.password}
                placeholder="Password"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <div className="submit">
          <AdminSubmitEditManager editedManagerData={editedManagerData} />
        </div>
      </Form>
    </div>
  );
}

export default AdminEditManager;