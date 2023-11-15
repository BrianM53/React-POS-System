import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.css";
import SubmitButton from "./submitEmployee";

function AddEmployee() {
    const [errorMsg, setErrorMsg] = useState("");
    const [employeeData, setEmployeeData] = useState({
        email: '',
        username: '',
        first_name: '',
        last_name: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({ ...employeeData, [name]: value });
    };

    const addEmployee = async (e) => {
        e.preventDefault();

        console.log(employeeData.email, employeeData.username, employeeData.first_name, employeeData.last_name);

        const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
      
        try {
            const response = await axios.post(BACKEND_URL + '/reports/add-employee', employeeData);

            console.log(response.data.data);

            let emailExists = false;
            for (let i = 0; i < response.data.data.length; i++) {
                if (response.data.data[i].email == employeeData.email) {
                    emailExists = true;
                }
            }

            if (emailExists) {
                setErrorMsg (
                    <div style={{ color: "green" }}>
                        Email exists.
                    </div>
                );
            } else {
                setErrorMsg (
                    <div style={{ color: "red" }}>
                        Email doesn't exist.
                    </div>
                );
            }
            
        } catch (error) {
            console.error("Error adding employee:", error);
        }
    }

    return (
    <div className="add-employee-content">
        <div className="Login-msg">{errorMsg}</div>

        <Form className="rounded p-3 p-sm-3" onSubmit={addEmployee}>
            <FloatingLabel label="Email address" className="mb-3">
            <Form.Control autoFocus name="email" type="email" value={employeeData.email} placeholder="Email address" onChange={handleInputChange}/>
            </FloatingLabel>

            <FloatingLabel label="Username" className="mb-3">
            <Form.Control name="username" type="text" value={employeeData.username} placeholder="Username" onChange={handleInputChange}/>
            </FloatingLabel>

            <FloatingLabel label="First name" className="mb-3">
            <Form.Control name="first_name" type="text" value={employeeData.first_name} placeholder="First name" onChange={handleInputChange}/>
            </FloatingLabel>

            <FloatingLabel label="Last name" className="mb-3">
            <Form.Control name="last_name" type="text" value={employeeData.last_name} placeholder="Last name" onChange={handleInputChange}/>
            </FloatingLabel>

            <div className="submit">
                <SubmitButton employeeData={employeeData} />
            </div>
            
        </Form>
    </div>
    );
}

export default AddEmployee;