import { Button } from "react-bootstrap";
import axios from 'axios';

function validateInput(loginData) {
  return loginData.email.length > 0 && loginData.password.length > 0;
}

const validateCredentials = async (loginData) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

  try {
    const response = await axios.post(BACKEND_URL + '/users/auth/login', loginData);
    return response.data;
  } catch (error) {
    console.error("Error validating credentials:", error);
    return { isCashier: false, isManager: false, isAdmin: false };
  }
}
  
export async function handleSubmit(event, loginData) {
  event.preventDefault();

  const { isCashier, isManager, isAdmin } = await validateCredentials(loginData);

  return {  isCashier, isManager, isAdmin };
} 

export function LoginButton({ loginData }) {
  return (
    <Button type="submit" variant="light" disabled={!validateInput(loginData)}>
      Login
    </Button>
  );
}
