import { Button } from "react-bootstrap";
import axios from 'axios';

/**
 * Validates the input for login.
 * @function validateInput
 * @param {Object} loginData - The login data to be validated.
 * @returns {boolean} - True if both email and password have non-empty values, false otherwise.
 */
function validateInput(loginData) {
  return loginData.email.length > 0 && loginData.password.length > 0;
}

/**
 * Validates the credentials using the backend.
 * @async
 * @function validateCredentials
 * @param {Object} loginData - The login data to be validated.
 * @returns {Object} - An object containing role information (isCashier, isManager, isAdmin).
 */
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
  
/**
 * Handles the form submission for login.
 * @async
 * @function handleSubmit
 * @param {Object} event - The form submit event.
 * @param {Object} loginData - The login data to be submitted.
 * @returns {Object} - An object containing role information (isCashier, isManager, isAdmin).
 */
export async function handleSubmit(event, loginData) {
  event.preventDefault();

  const { isCashier, isManager, isAdmin } = await validateCredentials(loginData);

  return {  isCashier, isManager, isAdmin };
} 

/**
 * A button component for login.
 * @component
 * @function LoginButton
 * @param {Object} props - The component props.
 * @param {Object} props.loginData - The login data.
 * @returns {JSX.Element} - Rendered component.
 */
export function LoginButton({ loginData }) {
  return (
    <Button type="submit" variant="light" disabled={!validateInput(loginData)}>
      Login
    </Button>
  );
}
