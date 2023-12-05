import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import AdminSubmitEditEmployee from "./adminSubmitEditEmployee";

import "./adminAdd.css";

function AdminEditEmployee({ selectedRowData, handleFinishEditing, handleCancelEditing }) {
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

    try 
    {
      const response = await axios.put(
        `${BACKEND_URL}/adminemployees/${editedEmployeeData.employee_id}`,
        editedEmployeeData
      );

      // console.log(response.data.message);

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

  const handleDeleteAndAdd = async (role) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
    
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/adminemployees/${editedEmployeeData.employee_id}/remove-and-create`,
        { data: { ...editedEmployeeData, role } }
      );
  
      if (response.status === 200) {
        console.log("Success of the await axios delete");
        handleFinishEditing();
      } else {
        setErrorMsg(
          <div style={{ color: "red" }}>{`Error deleting employee: ${response.data.message || response.statusText}`}</div>
        );
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      setErrorMsg(
        <div style={{ color: "red" }}>{`Error deleting employee: ${error.response ? error.response.data.message || error.response.statusText : error.message}`}</div>
      );
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
          <AdminSubmitEditEmployee editedEmployeeData={editedEmployeeData} />
        </div>
      </Form>

      <div className="role-buttons">
        <div className="make-employee-btn make-btn" onClick={() => handleDeleteAndAdd("employee")}>
          Delete and Add as Employee
        </div>
        <div className="make-manager-btn make-btn" onClick={() => handleDeleteAndAdd("manager")}>
          Delete and Add as Manager
        </div>
        <div className="make-customer-btn make-btn" onClick={() => handleDeleteAndAdd("customer")}>
          Delete and Add as Customer
        </div>
      </div>
      
    </div>
  );
}

export default AdminEditEmployee;