import { Button } from "react-bootstrap";

function validateInput(registerData) {
    return registerData.firstName.length > 0 && registerData.lastName.length > 0
        && registerData.email.length > 0 && registerData.password.length > 0;
}

function validateCredentials() {
}

export function handleSubmit(event, registerData, setRegisterMsg) {
    // use this to prevent the browser from doing anything
    // e.g. save credential prompt, page reload, etc
    event.preventDefault();
    
    const msg = (
        <div style={{ color: "red" }}>
          <p>First Name: {registerData.firstName}</p>
          <p>Last Name: {registerData.lastName}</p>
          <p>Email: {registerData.email}</p>
          <p>Password: {registerData.password}</p>
        </div>
    );

    setRegisterMsg(msg);
}

export function RegisterButton({ registerData }) {
    return (
        /**
        * @augments type enables Form to handle Form submit when this is pressed
        * @augments variant the color of the button
        * @augments disabled the disable state logic
        * */ 
        <Button type="submit" variant="light" disabled={!validateInput(registerData)}>
            Register
        </Button>
    );
}
