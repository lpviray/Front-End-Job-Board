import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginBox,
  LoginButton,
  UsernameInput,
  PasswordInput,
  LoginHeader,
  LoginError,
} from "./StyledComponents";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";

export default function Login(props) {
  const [usernameCheck, setUsernameCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [attempt, setAttempt] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsernameCheck(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordCheck(e.target.value);
  };

  // Check if username and password is valid when attempting login
  if (usernameCheck.length > 0 && passwordCheck.length > 0) {
    props.setLoggedIn(true);
  } else {
    props.setLoggedIn(false);
  }

  return (
    <>
      <LoginBox>
        <LoginHeader variant="h1" gutterBottom>
          Log in
        </LoginHeader>
        <UsernameInput
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
          placeholder="Username or Email"
          disableUnderline={true}
          onChange={handleUsernameChange}
          // Attempt login by pressing Enter button on keyboard
          onKeyDown={(e) => {
            if (e.key === "Enter" && props.loggedIn === true) navigate("/jobs");
            if (e.key === "Enter" && props.loggedIn === false) setAttempt(true);
            else null;
          }}
        />
        <PasswordInput
          placeholder="Password"
          disableUnderline={true}
          onChange={handlePasswordChange}
          // Attempt login by pressing Enter button on keyboard
          onKeyDown={(e) => {
            if (e.key === "Enter" && props.loggedIn === true) navigate("/jobs");
            else if (e.key === "Enter" && props.loggedIn === false)
              setAttempt(true);
            else null;
          }}
        />
        {/* Display error message on failed login attempt */}
        {attempt === true && (
          <LoginError variant="body1" gutterBottom>
            Please enter a valid Username and Password!
          </LoginError>
        )}
        <LoginButton
          variant="contained"
          onClick={() =>
            props.loggedIn === true ? navigate("/jobs") : setAttempt(true)
          }
        >
          Continue with Email
        </LoginButton>
      </LoginBox>
    </>
  );
}
