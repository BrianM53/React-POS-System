import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import SubmitEmployee from "./submitEmployee";

function EditEmployee({ selectedRowData, handleFinishEditing, handleCancelEditing }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [editedEmployeeData, setEditedEmployeeData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (selectedRowData) {
      setEditedEmployeeData({ ...selectedRowData });
    }
  }, [selectedRowData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployeeData({ ...editedEmployeeData, [name]: value });
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
     const BACKEND_URL =
       process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    try {
      const response = await axios.put(
        BACKEND_URL + "/employees/",
        editedEmployeeData
      );

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

    e.preventDefault();
    handleFinishEditing();

  };

  return (
    <div className="edit-employee-popup">
      <h3>Edit Employee</h3>
      <div className="Login-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing}>Cancel</button>

      <Form className="rounded p-3 p-sm-3" onSubmit={updateEmployee}>

        <FloatingLabel label="First name" className="mb-3">
            <Form.Control
                name="first_name"
                type="text"
                value={editedEmployeeData.first_name}
                placeholder="First name"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Last name" className="mb-3">
            <Form.Control
                name="last_name"
                type="text"
                value={editedEmployeeData.last_name}
                placeholder="Last name"
                onChange={handleInputChange}
            />
            </FloatingLabel>

        <FloatingLabel label="Phone" className="mb-3">
            <Form.Control
                name="phone"
                type="tel"
                maxLength="11"
                value={editedEmployeeData.phone}
                placeholder="Phone"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Email address" className="mb-3">
            <Form.Control
                name="email"
                type="email"
                value={editedEmployeeData.email}
                placeholder="Email address"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Username" className="mb-3">
            <Form.Control
                name="username"
                type="text"
                value={editedEmployeeData.username}
                placeholder="Username"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Password" className="mb-3">
            <Form.Control
                name="password"
                type="password"
                value={editedEmployeeData.password}
                placeholder="Password"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <div className="submit">
          <SubmitEmployee employeeData={editedEmployeeData} />
        </div>
      </Form>
    </div>
  );
}

export default EditEmployee;