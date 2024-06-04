import axios from "axios";
import React, { useState } from "react";
import { ReactComponent as LinkedinLogo } from "../../assets/img/linkedinLogo.svg";
import "../../assets/styles/signup.css";
import {
  TextField,
  Button,
  Divider,
  Chip,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signUpApi } from "../../utils/apis/authAPIs";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    appType: "linkedin",
  });

  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const [signUpLoader, setSignUpLoader] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;

    if (name === "name" && /\d/.test(value)) {
      setNameError("Name can only contain alphabets.");
    } else {
      setNameError(false);
    }
    if (name === "email" && !isValidEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(false);
    }
    if (name === "password" && value.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError(false);
    }

    setUserInfo({ ...userInfo, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formSubmit = async (e) => {
    setSignUpError(false)
    if (!userInfo.name) {
      setNameError("Please enter a valid name.");
    }
    if (!userInfo.email) {
      setEmailError("Please enter a valid email address.");
    }
    if (!userInfo.password) {
      setPasswordError("Please enter a valid password.");
      return;
    }
    setSignUpLoader(true);
    e.preventDefault();
    try {
      const res = await signUpApi(userInfo);
      
      if (!res.success) {
        setSignUpError(res.msg);
        console.log(res);
      } else {
        setSignUpError(false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSignUpLoader(false);
    }
  };

  return (
    <div className="signup-page">
      <section className="logo">
      <Link to='/'><LinkedinLogo /></Link>
        
      </section>

      <section id="signupContainer" className="signup-container">
        <h3 className="signup-heading">
          Make the most of your professional life
        </h3>

        <div className="signup-form">
          {!nameError ? (
            <TextField
              id="signup-name"
              label="Name"
              name="name"
              type="text"
              value={userInfo.name}
              onChange={handleChanges}
              size="small"
              sx={{ width: "100%" }}
            />
          ) : (
            <TextField
              error
              helperText={nameError}
              id="signup-name"
              label="Name"
              name="name"
              type="text"
              value={userInfo.name}
              onChange={handleChanges}
              size="small"
              sx={{ width: "100%" }}
            />
          )}
          {!emailError ? (
            <TextField
              id="signup-email"
              label="Email"
              name="email"
              type="email"
              value={userInfo.email}
              onChange={handleChanges}
              size="small"
              sx={{ width: "100%" }}
            />
          ) : (
            <TextField
              error
              helperText={emailError}
              id="signup-email"
              label="Email"
              name="email"
              type="email"
              value={userInfo.email}
              onChange={handleChanges}
              size="small"
              sx={{ width: "100%" }}
            />
          )}
          {!passwordError ? (
            <TextField
              id="signup-password"
              label="Password"
              name="password"
              type="password"
              value={userInfo.password}
              onChange={handleChanges}
              size="small"
              sx={{ width: "100%" }}
            />
          ) : (
            <TextField
              error
              helperText={passwordError}
              id="signup-password"
              label="Password"
              name="password"
              type="password"
              value={userInfo.password}
              onChange={handleChanges}
              size="small"
              sx={{ width: "100%" }}
            />
          )}

          <p id="agreementText">
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy.
          </p>
          {signUpError && (
            <Alert variant="outlined" severity="error">
              {signUpError}
            </Alert>
          )}
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "25px", width: "100%" }}
            onClick={formSubmit}
            disabled={signUpLoader}
          >
            {signUpLoader ? <CircularProgress size={20} /> : "Agree & Join"}
          </Button>

          <Chip label="OR" />
          <div className="signin-redirection">
            Already on LinkedIn? <Link to="/login">Sign In</Link>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
