import { Button } from "react-bootstrap";
import axios from 'axios';

function validateInput(loginData) {
  return loginData.email.length > 0 && loginData.password.length > 0;
}

const validateCredentials = async (loginData) => {
  try {
    const response = await axios.post('http://localhost:3001/users/auth/login', loginData);
    return response.data;
  } catch (error) {
    console.error("Error validating credentials:", error);
    return { isEmployee: false, isManager: false };
  }
}
  
export async function handleSubmit(event, loginData, setLoginMsg) {
  event.preventDefault();
  const { isEmployee, isManager } = await validateCredentials(loginData);
    
  if (isManager) {
    setLoginMsg (
      <div style={{ color: "green" }}>
        Manager
      </div>
    );
  } else if (isEmployee) {
    setLoginMsg (
      <div style={{ color: "green" }}>
        Employee
      </div>
    );
  } else {
    setLoginMsg (
      <div style={{ color: "red" }}>
        Invalid email or password.
      </div>
    );
  }
} 

export function LoginButton({ loginData }) {
  return (
    <Button type="submit" variant="light" disabled={!validateInput(loginData)}>
      Login
    </Button>
  );
}
