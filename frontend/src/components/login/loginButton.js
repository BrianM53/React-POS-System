import { Button } from "react-bootstrap";

function validateInput(loginData) {
    return loginData.email.length > 0 && loginData.password.length > 0;
}

async function validateEmail(loginData) {
    try {
        const response = await fetch("http://localhost:3001/users/credentials");
        if (!response.ok) {
            throw new Error("Failed to fetch credentials");
        }
        
        const jsonResponse = await response.json();
        
        const { employees, managers } = jsonResponse.data;

        // Check if loginData.email is in the employees or managers array
        const isEmployee = employees.find((employee) => employee.email === loginData.email);
        const isManager = managers.find((manager) => manager.email === loginData.email);

        return { isEmployee, isManager };
    } catch (error) {
        console.error("Error validating email:", error);
        return { isEmployee: false, isManager: false };
    }
}

export async function handleSubmit(event, loginData, setLoginMsg) {
    event.preventDefault();

    const { isEmployee, isManager } = await validateEmail(loginData);

    if (isManager) {
        const msg = (
            <div style={{ color: "green" }}>
              <p>Email: {loginData.email}</p>
              <p>Password: {loginData.password}</p>
              <p>manager</p>
            </div>
        );
    
        setLoginMsg(msg);
    } else if (isEmployee) {
        const msg = (
            <div style={{ color: "green" }}>
              <p>Email: {loginData.email}</p>
              <p>Password: {loginData.password}</p>
              <p>employee</p>
            </div>
        );
    
        setLoginMsg(msg);
    } else {
        const msg = (
            <div style={{ color: "red" }}>
              <p>Email: {loginData.email}</p>
              <p>Password: {loginData.password}</p>
              <p>Login Failed</p>
            </div>
        );
    
        setLoginMsg(msg);
    }
}

export function LoginButton({ loginData }) {
    return (
        <Button type="submit" variant="light" disabled={!validateInput(loginData)}>
            Login
        </Button>
    );
}
