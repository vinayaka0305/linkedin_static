import React from "react";
import { ReactComponent as LinkedinLogo } from "../../assets/img/linkedinLogo.svg";
import  LoginBg  from "../../assets/img/loginBg.svg";
import "../../assets/styles/login.css";
import {
  TextField,
  Button,
  Divider,
  Chip,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { signInApi } from "../../utils/apis/authAPIs";
import { Link } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    appType: "linkedin",
  });

  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [signInError, setSignError] = useState();

  const [signInLoader, setSignInLoader] = useState(false);

  

  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;

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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setSignInLoader(true);
      const res = await signInApi(userInfo);
      if (res.status) {
        
        navigate("/");
      } else {
        
        setSignError(res.error);
      }
    } catch (error) {
      setSignError(error.message);
    } finally {
      setSignInLoader(false);
    }
  };

  return (
    <div>
      <section style={{margin:"1rem"}}>
      <Link to="/">
        <LinkedinLogo />
      </Link>
      </section>

      <div className="login-container">
        <section className="form-container">
          <h3 className="login-heading">
            Welcome to your professional community
          </h3>
          {!emailError ? (
            <TextField
              sx={{ marginTop: "10px", width: "70%" }}
              id="login-email"
              label="Email"
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChanges}
            />
          ) : (
            <TextField
              error
              helperText={emailError}
              sx={{ marginTop: "10px", width: "70%" }}
              id="login-email"
              label="Email"
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChanges}
            />
          )}

          <br />
          {!passwordError ? (
            <TextField
              fullWidth
              sx={{ marginTop: "2rem", width: "70%" }}
              id="login-password"
              label="Password"
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleChanges}
            />
          ) : (
            <TextField
              error
              helperText={passwordError}
              fullWidth
              sx={{ marginTop: "2rem", width: "70%" }}
              id="login-password"
              label="Password"
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleChanges}
            />
          )}

          <br />
          {signInError && (
            <Alert
              sx={{ marginTop: "2rem", width: "65%" }}
              variant="outlined"
              severity="error"
            >
              {signInError}
            </Alert>
          )}
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "25px", width: "70%", marginTop: "2rem" }}
            onClick={handleLogin}
            disabled={signInLoader}
          >
            {signInLoader ? <CircularProgress size={20} /> : "SignIn"}
          </Button>

          <Divider sx={{ width: "70%", marginTop: "2rem" }}>
            <Chip label="OR" />
          </Divider>
          <Button
            onClick={() => navigate("/signup")}
            variant="outlined"
            sx={{
              borderRadius: "25px",
              width: "70%",
              fontWeight: "80",
              marginTop: "2rem",
              color: "black",
              border: "1px solid black",
            }}
          >
            New to LinkedIn? Join now
          </Button>
        </section>
        <section className="login-image">
          <img
            src={LoginBg}
            alt="login-background"
          />
        </section>
      </div>
      
    </div>
  );
};

export default Login;
