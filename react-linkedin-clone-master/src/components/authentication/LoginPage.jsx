import React, { useContext, useRef, useState } from "react";
import styles from "../../styles/authentication/LoginPage.module.css";
import LoginPageNavList from "./LoginPageNavList";
import { useNavigate } from "react-router-dom";
import { getEmailRegEx, getPassWordRegEx } from "../../utils/authentication/getRegEx";
import {
  getEmailErrorMessage,
  getPassWordErrorMessage,
} from "../../utils/authentication/getErrorMessages";
import axios from "axios";
import { getProjectID } from "../../utils/authentication/getProjectID";
import {
  getErrorToast,
} from "../../utils/authentication/getToastNotification";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../App";

const LoginPage = () => {
  const { setJwtToken, setUserInfo } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(true);
  const [eMailErrorMessage, seteMailErrorMessage] = useState("");
  const [passWordErrorMessage, setPassWordErrorMessage] = useState("");

  const eMailRef = useRef();
  const passWordRef = useRef();
  const passWordSectionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value: eMailValue } = eMailRef.current;
    const { value: passWordValue } = passWordRef.current;
    const eMailRegEx = getEmailRegEx();
    const passWordRegEx = getPassWordRegEx();

    if (!eMailRegEx.test(eMailValue)) {
      seteMailErrorMessage(getEmailErrorMessage());
    } else {
      seteMailErrorMessage("");
      if (!passWordRegEx.test(passWordValue)) {
        setPassWordErrorMessage(getPassWordErrorMessage());
      } else {
        setPassWordErrorMessage("");
        const body = {
          email: eMailValue,
          password: passWordValue,
          appType: "linkedin",
        };
        loginApiCall(body);
      }
    }
  };

  const loginApiCall = (body) =>
    axios
      .post("https://academics.newtonschool.co/api/v1/user/login", body, {
        headers: {
          "Content-Type": "application/json",
          projectID: getProjectID(),
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("jwtToken",JSON.stringify(res.data.token));
        setJwtToken(res.data.token);
        setUserInfo({ ...res.data.data });
        localStorage.setItem("userInfo",JSON.stringify(res.data.data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        getErrorToast(err.response.data.message);
      });

  const handlePasswordCheck = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const handleJoinNow = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <div className={styles.loginPage}>
      <LoginPageNavList />
      <ToastContainer />
      <div className={styles.loginFormContainer}>
        <h1>Welcome to your professional community</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" ref={eMailRef} required />
          <p className={styles.errorMessage}>{eMailErrorMessage}</p>
          <label htmlFor="passWord">Password</label>
          <section
            className={styles.passWordContainer}
            ref={passWordSectionRef}
          >
            <input
              type={showPassword ? "password" : "text"}
              name="passWord"
              id="passWord"
              ref={passWordRef}
              required
            />
            <button onClick={handlePasswordCheck}>
              {showPassword ? "Show" : "Hide"}
            </button>
          </section>
          <p className={styles.errorMessage}>{passWordErrorMessage}</p>
          <a href="#">Forgot password?</a>
          <button className={styles.signInButton}>Sign in</button>
          <section className={styles.or}>
            <span></span>or<span></span>
          </section>
          <button className={styles.joinNowButton} onClick={handleJoinNow}>
            New to LinkedIn? Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
