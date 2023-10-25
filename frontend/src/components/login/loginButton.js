import { Button } from "react-bootstrap";
import axios from 'axios';

function validateInput(loginData) {
    return loginData.email.length > 0 && loginData.password.length > 0;
}

const validateCredentials = async (loginData) => {
    // try {
    //     console.log(JSON.stringify(loginData));
    //     const response = await axios.post("http://localhost:3001/users/test", "lol");

    //     return response.data;
    // } catch (error) {
    //     console.error("Error validating credentials:", error);
    //     return { isEmployee: false, isManager: false };
    // }
}

export async function handleSubmit(event, loginData, setLoginMsg) {
    event.preventDefault();
    console.log(JSON.stringify(loginData));
    axios.post('http://localhost:3001/users/login', loginData)
      .then(() => console.log('Book Created'))
      .catch(err => {
        console.error(err);
    });
}
//     // const { isEmployee, isManager } = await validateCredentials(loginData);
  
//     // if (isManager) {
//     //   const msg = (
//     //     <div style={{ color: "green" }}>
//     //       Manager
//     //     </div>
//     //   );
  
//     //   setLoginMsg(msg);
//     // } else if (isEmployee) {
//     //   const msg = (
//     //     <div style={{ color: "green" }}>
//     //       Employee
//     //     </div>
//     //   );
  
//     //   setLoginMsg(msg);
//     // } else {
//     //   const msg = (
//     //     <div style={{ color: "red" }}>
//     //       Invalid email or password.
//     //     </div>
//     //   );
  
//     //   setLoginMsg(msg);
//     // }
//   }
  

export function LoginButton({ loginData }) {
    return (
        <Button type="submit" variant="light" disabled={!validateInput(loginData)}>
            Login
        </Button>
    );
}