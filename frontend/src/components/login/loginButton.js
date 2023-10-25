import { Button } from "react-bootstrap";

function validateInput(loginData) {
    return loginData.email.length > 0 && loginData.password.length > 0;
}

function validateCredentials(loginData) {
}

export function handleSubmit(event, loginData, setLoginMsg) {
    // use this to prevent the browser from doing anything
    // e.g. save credential prompt, page reload, etc
    event.preventDefault();
    
    if (validateCredentials(loginData)) {
    } else {
        const msg = (
            <div style={{ color: "red" }}>
              <p>Email: {loginData.email}</p>
              <p>Password: {loginData.password}</p>
            </div>
        );
    
        setLoginMsg(msg);
    }
}

export function LoginButton({ loginData }) {
    return (
        /**
        * @augments type enables Form to handle Form submit when this is pressed
        * @augments variant the color of the button
        * @augments disabled the disable state logic
        * */ 
        <Button type="submit" variant="light" disabled={!validateInput(loginData)}>
            Login
        </Button>
    );
}
