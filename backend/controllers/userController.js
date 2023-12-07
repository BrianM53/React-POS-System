const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");

/**
 * Handles user login using Google OAuth.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @throws {Error} Throws an error if any operation fails.
 */
const loginController = async(req, res) => {
    if (req.body.googleAccessToken) {
        axios.get("https://www.googleapis.com/oauth/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${req.body.googleAccessToken}`
            }
        }).then(async credentialResponse => {
            // example credential: eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwNmFmMGI2OGEyMTE5ZDY5MmNhYzRhYmY0MTVmZjM3ODgxMzZmNjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2NDY1OTEyMzc1MDYtajQxOTZuOGEwazJ0cW9hYXFjbHYzMTRwdWo4cTZpM24uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2NDY1OTEyMzc1MDYtajQxOTZuOGEwazJ0cW9hYXFjbHYzMTRwdWo4cTZpM24uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMxOTMwNjkyOTYyOTMyNjEzNDciLCJoZCI6InRhbXUuZWR1IiwiZW1haWwiOiJyYWtlQHRhbXUuZWR1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTY5ODIwMTU2NywibmFtZSI6IkRlcmljIExlIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0xUU0R6dFMtRC1nOWx0ZnpRRTJ1NEw1RGZZazE5aEVMRU9mZ2NKWUZITj1zOTYtYyIsImdpdmVuX25hbWUiOiJEZXJpYyIsImZhbWlseV9uYW1lIjoiTGUiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTY5ODIwMTg2NywiZXhwIjoxNjk4MjA1NDY3LCJqdGkiOiJiNTM5OWU1ZDFmZmI5ZThhNmQzY2ZmOWFkN2VjYjQ0MWI5OGZlMjJkIn0.KfTEXdHl_puRg1YndHiC1c-6WIa4cR6gyQhQ7DIZJR9ohUim_st7d8-kENf1u_ZIWFXJTzdNk0NGU4JIektflQtdQFhKh5wxKKtqBE4oy5qDiOa5SAUBUUAQlZOj0W-88hGH407kCWt7dBSlIKNXnUPgfe6SxmY90jQBFg19ZMDwpD8XmfTIHS4xaImRSFPliR0m0BtTrXZut4LAevTR9G0sgULSX_dpo16RA_xSR9aLpcCwXzSFIfA9n7C2F2ms2TpVhMzDgY2nVYjsAZ9hqD-aexRVXeOHuE-q61mq-2flEMhlXmSSI8Gr_kRYF4rN7yUg75pmtNSHK7LJkYP0cA
            // paste into jwt.io to see result and why we are using these variables
            const firstName = credentialResponse.data.given_name;
            const lastName = credentialResponse.data.family_name;
            const email = credentialResponse.data.email;

            checkEmail(email);
            if (isManagerEmail || isEmployeeEmail) {
                return res.status(400).json({message: "User already exists."});
            }
        })
    }
}