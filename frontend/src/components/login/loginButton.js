import { Button } from "react-bootstrap";

function validateInput(email, password) {
    return email.length > 0 && password.length > 0;
}

function validateCredentials(email, password) {
}

export function handleLogin(event, email, password, setLoginMsg) {
    // use this to prevent the browser from doing anything
    // e.g. save credential prompt, page reload, etc
    event.preventDefault();
    
    if (validateCredentials(email, password)) {
    } else {
        setLoginMsg(
            <span style={{ color: "red" }}>Invalid username or password.</span>
        );
    }
}

export function LoginButton({ email, password }) {
    return (
        /**
        * @augments type enables Form to handle Form submit when this is pressed
        * @augments variant the color of the button
        * @augments disabled the disable state logic
        * */ 
        <Button type="submit" variant="light" disabled={!validateInput(email, password)}>Sign in</Button>
    );
}
