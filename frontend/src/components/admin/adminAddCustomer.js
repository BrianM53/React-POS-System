import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import AdminSubmitCustomer from "./adminSubmitCustomer";

import "./adminAdd.css";

/**
 * Renders the form for adding a new customer, allowing the user to input customer details.
 * @function AdminAddCustomer
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onFinishAddingCustomer - Callback function triggered when a customer is successfully added.
 * @param {Function} props.handleCancelEditing - Callback function triggered when the user cancels the customer addition.
 * @returns {JSX.Element} - The JSX markup for the AdminAddCustomer component.
 */
function AdminAddCustomer({ onFinishAddingCustomer, handleCancelEditing }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [customerData, setCustomerData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });

    /**
   * Handles changes in the input fields and updates the customerData state.
   * @function handleInputChange
   * @param {Object} e - The event object triggered by the input field.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  /**
   * Sends a request to the backend to add a new customer based on the entered details.
   * @function addCustomer
   * @param {Object} e - The event object triggered by the form submission.
   */

  const addCustomer = async (e) => {
    e.preventDefault();
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

    try 
    {
      const response = await axios.post(
        BACKEND_URL + "/admincustomers",
        customerData
      );
      if (response.data.message === "Customer added successfully") 
      {
        setErrorMsg(
          <div style={{ color: "green" }}>Customer added successfully.</div>
        );
        onFinishAddingCustomer();
      } 
      else if (response.data.message === "Customer already exists") 
      {
        setErrorMsg(
          <div style={{ color: "red" }}>Customer already exists.</div>
        );
      }
    } 
    catch (error) 
    {
      console.error("Error adding customer:", error);
      setErrorMsg(<div style={{ color: "red" }}>Error adding customer.</div>);
    }
  };

  return (
    <div className="add-employee-content">
      <div className="title">Add Customer</div>
      <div className="Login-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing} className="x-out-btn" >X</button>

      <Form className="rounded p-3 p-sm-3" onSubmit={addCustomer}>
        <FloatingLabel label="First name" className="mb-3">
          <Form.Control
            name="first_name"
            type="text"
            value={customerData.first_name}
            placeholder="First name"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Last name" className="mb-3">
          <Form.Control
            name="last_name"
            type="text"
            value={customerData.last_name}
            placeholder="Last name"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Phone" className="mb-3">
          <Form.Control
            name="phone"
            type="tel"
            maxLength="11"
            value={customerData.phone}
            placeholder="phone"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel label="Email address" className="mb-3">
          <Form.Control
            autoFocus
            name="email"
            type="email"
            value={customerData.email}
            placeholder="Email address"
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <div className="submit">
          <AdminSubmitCustomer customerData={customerData} />
        </div>
      </Form>
    </div>
  );
}

export default AdminAddCustomer;
