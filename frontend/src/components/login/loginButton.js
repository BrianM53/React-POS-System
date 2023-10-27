import { Button } from "react-bootstrap";
import axios from 'axios';

function validateInput(loginData) {
  return loginData.email.length > 0 && loginData.password.length > 0;
}

const validateCredentials = async (loginData) => {
  var backendURL = process.env.REACT_APP_BACKEND_URL;
  // console.log(backendURL);
  // backendURL = 'http://localhost:3001'
  // console.log(backendURL);
  try {
    const response = await axios.post('${backendURL}/users/auth/login', loginData);
    return response.data;
  } catch (error) {
    console.error("Error validating credentials:", error);
    return { isCashier: false, isManager: false };
  }
}
  
export async function handleSubmit(event, loginData) {
  event.preventDefault();

  const { isCashier, isManager } = await validateCredentials(loginData);

  return {  isCashier, isManager };
} 

export function LoginButton({ loginData }) {
  return (
    <Button type="submit" variant="light" disabled={!validateInput(loginData)}>
      Login
    </Button>
  );
}
