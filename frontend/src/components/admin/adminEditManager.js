import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import AdminSubmitEditManager from "./adminSubmitEditManager";

import "./adminAdd.css";

/**
 * Renders the form for editing a manager's details, allowing the user to modify manager information.
 * @function AdminEditManager
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.selectedRowData - The data of the selected manager for editing.
 * @param {Function} props.handleFinishEditing - Callback function triggered when the editing process is successfully completed.
 * @param {Function} props.handleCancelEditing - Callback function triggered when the user cancels the editing process.
 * @returns {JSX.Element} - The JSX markup for the AdminEditManager component.
 */
function AdminEditManager({ selectedRowData, handleFinishEditing, handleCancelEditing }) {
  /**
   * Manages the error message state for displaying feedback to the user.
   * @type {[string, Function]} errorMsg
   */
  const [errorMsg, setErrorMsg] = useState("");
  /**
   * Manages the state for edited manager data, reflecting the changes made during the edit process.
   * @type {[Object, Function]} editedManagerData
   */
  const [editedManagerData, setEditedManagerData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  /**
   * Updates the editedManagerData state when the selectedRowData changes.
   * @function useEffect
   * @param {Function} effect - The effect function to execute.
   * @param {Array} dependencies - The dependencies to watch for changes.
   */
  useEffect(() => {
    if (selectedRowData) {
      setEditedManagerData({ ...selectedRowData });
    }
  }, [selectedRowData]);

    /**
   * Handles changes in the input fields and updates the editedManagerData state.
   * @function handleInputChange
   * @param {Object} e - The event object triggered by the input field.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedManagerData({ ...editedManagerData, [name]: value });
  };

  /**
   * Sends a request to the backend to update a manager's details based on the entered changes.
   * @function updateEditedManager
   * @param {Object} e - The event object triggered by the form submission.
   */
  const updateEditedManager = async (e) => {
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

      if (response.data.message === "Manager updated successfully") 
      {
        setErrorMsg(
          <div style={{ color: "green" }}>Manager updated successfully.</div>
        );
        handleFinishEditing();
      } 
      else 
      {
        setErrorMsg(
          <div style={{ color: "red" }}>Error updating manager.</div>
        );
      }
    } 
    catch (error) 
    {
      console.error("Error updating manager:", error);
      setErrorMsg(<div style={{ color: "red" }}>Error updating manager.</div>);
    }
  };

  /**
   * Handles the delete-and-add process for changing the role of the manager.
   * @function handleDeleteAndAdd
   * @param {string} role - The new role to assign to the manager (employee, manager, or customer).
   */
  const handleDeleteAndAdd = async (role) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
    
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/adminmanagers/${editedManagerData.manager_id}/remove-and-create`,
        { data: { ...editedManagerData, role } }
      );
  
      if (response.status === 200) {
        console.log("Success of the await axios delete");
        handleFinishEditing();
      } else {
        setErrorMsg(
          <div style={{ color: "red" }}>{`Error deleting manager: ${response.data.message || response.statusText}`}</div>
        );
      }
    } catch (error) {
      console.error("Error deleting manager:", error);
      setErrorMsg(
        <div style={{ color: "red" }}>{`Error deleting manager: ${error.response ? error.response.data.message || error.response.statusText : error.message}`}</div>
      );
    }
  };


  return (
    <div className="edit-employee-popup">
      <div className="title">Edit Manager</div>
      <div className="Login-msg">{errorMsg}</div>

      <button onClick={handleCancelEditing} className="x-out-btn" >X</button>

      <Form className="rounded p-3 p-sm-3" onSubmit={updateEditedManager}>

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

export default AdminEditManager;