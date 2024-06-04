import React, { useContext } from "react";
import styles from "../../styles/authentication/SignUpPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFooter from "../footer/LoginFooter";
import {
  getEmailRegEx,
  getPassWordRegEx,
  getUserNameRegEx,
} from "../../utils/authentication/getRegEx";
import {
  getEmailErrorMessage,
  getPassWordErrorMessage,
  getUserNameErrorMessage,
} from "../../utils/authentication/getErrorMessages";
import {
  getSuccessToast,
  getErrorToast,
  getWarningToast,
} from "../../utils/authentication/getToastNotification";
import axios from "axios";
import { getProjectID } from "../../utils/authentication/getProjectID";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../App";

const SignUp = () => {
  const navigate = useNavigate();
  const { jwtToken } = useContext(AuthContext);
  const handleLogoClick = () => {
    if (jwtToken) {
      navigate("/home");
    } else {
      getWarningToast("Please Login First!");
    }
  };

  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [eMailErrorMessage, seteMailErrorMessage] = useState("");
  const [passWordErrorMessage, setPassWordErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const userNameRef = useRef();
  const eMailRef = useRef();
  const passWordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value: userNameValue } = userNameRef.current;
    const { value: eMailValue } = eMailRef.current;
    const { value: passWordValue } = passWordRef.current;
    const userNameRegEx = getUserNameRegEx();
    const eMailRegEx = getEmailRegEx();
    const passWordRegEx = getPassWordRegEx();

    if (!userNameRegEx.test(userNameValue)) {
      setUserNameErrorMessage(getUserNameErrorMessage());
    } else {
      setUserNameErrorMessage("");
      if (!eMailRegEx.test(eMailValue)) {
        seteMailErrorMessage(getEmailErrorMessage());
      } else {
        seteMailErrorMessage("");
        if (!passWordRegEx.test(passWordValue)) {
          setPassWordErrorMessage(getPassWordErrorMessage());
        } else {
          setPassWordErrorMessage("");
          const body = {
            name: userNameValue,
            email: eMailValue,
            password: passWordValue,
            appType: "linkedin",
          };
          signUpApiCall(body);
        }
      }
    }
  };
  const signUpApiCall = (body) => {
    axios
      .post("https://academics.newtonschool.co/api/v1/user/signup", body, {
        headers: {
          "Content-Type": "application/json",
          projectID: getProjectID(),
        },
      })
      .then((res) => {
        console.log(res.data);
        getSuccessToast(res.data.status);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data);
        getErrorToast(err.response.data.message);
      });
  };

  const handlePasswordCheck = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.signUpPage}>
      <div className={styles.headerContainer}>
        <h1 onClick={handleLogoClick}>
          Linked
          <FontAwesomeIcon icon={faLinkedin} />
        </h1>
      </div>
      <ToastContainer />
      <div className={styles.signUpFormContainer}>
        <h1>Join LinkedIn to find the right job</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            ref={userNameRef}
            required
          />
          <p className={styles.error}>{userNameErrorMessage}</p>
          <label htmlFor="mailOrPhone">Email</label>
          <input
            type="text"
            name="mailOrPhone"
            id="mailOrPhone"
            ref={eMailRef}
            required
          />
          <p className={styles.error}>{eMailErrorMessage}</p>
          <label htmlFor="passWord">Password(6+ characters)</label>
          <section className={styles.passWordContainer}>
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
          <p className={styles.error}>{passWordErrorMessage}</p>
          <p className={styles.termsAndConditions}>
            By clicking Agree & Join, you agree to the LinkedIn
            <a href="">User Agreement</a>,<a href="">Privacy Policy</a>and
            <a href="">Cookie Policy</a>.
          </p>
          <section className={styles.buttons}>
            <button>Agree & Join</button>
            <section className={styles.or}>
              <span></span>
              <p>or</p>
              <span></span>
            </section>
            <p className={styles.signInLink}>
              Already on LinkedIn?<Link to="/login">Sign In</Link>
            </p>
          </section>
        </form>
      </div>
      <LoginFooter />
    </div>
  );
};

export default SignUp;
