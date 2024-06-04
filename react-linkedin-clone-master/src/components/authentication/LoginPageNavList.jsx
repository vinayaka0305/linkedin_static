import React, { useContext } from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/authentication/LoginPageNavList.module.css";
import { getLoginPageNavLinks } from "../../utils/home/getNavLinks";
import { AuthContext } from "../../App";
import { getWarningToast } from "../../utils/authentication/getToastNotification";

const LoginPageNavList = () => {
  const { jwtToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const navLinks = getLoginPageNavLinks();
  const handleJoinNow = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleLogoClick = () => {
    if (jwtToken) {
      navigate("/home");
    } else {
      getWarningToast("Please Login First!");
    }
  };
  return (
    <nav className={styles.loginNavBar}>
      <h1 onClick={handleLogoClick}>
        Linked
        <FontAwesomeIcon icon={faLinkedin} />
      </h1>
      <div>
        <ul>
          {navLinks.map(({ icon, text }, i) => {
            return (
              <li key={i}>
                <FontAwesomeIcon icon={icon} />
                {text}
              </li>
            );
          })}
        </ul>

        <div>
          <a href="#">Join now</a>
          <button onClick={handleJoinNow}>Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default LoginPageNavList;
