export function validateInput(email, password) {
    return email.length > 0 && password.length > 0;
  }

export function validateCredentials(email, password) {
}

export function handleSubmit(event, email, password, setLoginMsg) {
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
