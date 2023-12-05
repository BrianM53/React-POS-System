import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import AdminSubmitEditCustomer from "./adminSubmitEditCustomer";

import "./adminAdd.css";

function AdminEditCustomer({ selectedRowData, handleFinishEditing, handleCancelEditing }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [editedCustomerData, setEditedCustomerData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (selectedRowData) {
      setEditedCustomerData({ ...selectedRowData });
    }
  }, [selectedRowData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomerData({ ...editedCustomerData, [name]: value });
  };

  const updateEditCustomer = async (e) => {
    e.preventDefault();
     const BACKEND_URL =
       process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    try {

      console.log(editedCustomerData);

      const response = await axios.put(
        `${BACKEND_URL}/admincustomers/${editedCustomerData.customer_id}`,
        editedCustomerData
      );

      console.log(response.data.message);

      if (response.data.message === "Customer updated successfully") 
      {
        setErrorMsg(
          <div style={{ color: "green" }}>Customer updated successfully.</div>
        );
        handleFinishEditing();
      } 
      else 
      {
        setErrorMsg(
          <div style={{ color: "red" }}>Error updating customer.</div>
        );
      }
    } 
    catch (error) 
    {
      console.error("Error updating customer:", error);
      setErrorMsg(<div style={{ color: "red" }}>Error updating customer.</div>);
    }
  };

  const handleDeleteAndAdd = async (role) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
    
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/admincustomers/${editedCustomerData.customer_id}/remove-and-create`,
        { data: { ...editedCustomerData, role } }
      );
  
      if (response.status === 200) {
        console.log("Success of the await axios delete");
        handleFinishEditing();
      } else {
        setErrorMsg(
          <div style={{ color: "red" }}>{`Error deleting customer: ${response.data.message || response.statusText}`}</div>
        );
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
      setErrorMsg(
        <div style={{ color: "red" }}>{`Error deleting customer: ${error.response ? error.response.data.message || error.response.statusText : error.message}`}</div>
      );
    }
  };

  return (
    <div className="edit-employee-popup">
      <div className="title">Edit Customer</div>
      <div className="Login-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing} className="x-out-btn" >X</button>

      <Form className="rounded p-3 p-sm-3" onSubmit={updateEditCustomer}>

        <FloatingLabel label="First name" className="mb-3">
            <Form.Control
                name="first_name"
                type="text"
                value={editedCustomerData.first_name}
                placeholder="First name"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Last name" className="mb-3">
            <Form.Control
                name="last_name"
                type="text"
                value={editedCustomerData.last_name}
                placeholder="Last name"
                onChange={handleInputChange}
            />
            </FloatingLabel>

        <FloatingLabel label="Phone" className="mb-3">
            <Form.Control
                name="phone"
                type="tel"
                maxLength="11"
                value={editedCustomerData.phone}
                placeholder="Phone"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <FloatingLabel label="Email address" className="mb-3">
            <Form.Control
                name="email"
                type="email"
                value={editedCustomerData.email}
                placeholder="Email address"
                onChange={handleInputChange}
            />
        </FloatingLabel>

        <div className="submit">
          <AdminSubmitEditCustomer editedCustomerData={editedCustomerData} />
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

export default AdminEditCustomer;