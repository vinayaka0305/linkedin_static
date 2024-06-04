import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/authentication/ProfileDropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../App";
import ProfilePicture from "../Account/ProfilePicture";
import { getSkills } from "../../utils/home/getSkills";

const DropDown = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const skills = getSkills();
  const navigate = useNavigate();
  const { darkTheme, setDarkTheme } = useContext(AuthContext);
  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      className={styles.dropDownContainer}
      style={{ backgroundColor: darkTheme ? "#1b1f23" : "#fff" }}
    >
      <Link to="account" style={{ color: darkTheme ? "#ddd" : "#333" }}>
        <div style={{ display: "flex" }}>
          <ProfilePicture />
          <div>
            <p>
              {userInfo && userInfo.name}
            </p>
            <div className={styles.skills}>
              {skills.map((skill, i) => (
                <p key={i}>{skill}</p>
              ))}
            </div>
          </div>
        </div>

        <p>View Profile</p>
      </Link>
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        style={{ color: darkTheme ? "#ddd" : "#333" }}
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} />
        Switch Theme
      </button>
      <p
        onClick={handleSignOut}
        style={{ color: darkTheme ? "#ffffff99" : "#00000099" }}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        Sign-Out
      </p>
    </div>
  );
};

export default DropDown;
