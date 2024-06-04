import React, { useContext, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { Business } from "../navlinks/Business";
import { useState } from "react";
import styles from "../../styles/navbar/NavLinks.module.css";
import { getNavLinks } from "../../utils/home/getNavLinks";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as BusinessLink } from "../../assets/businessLink/BusinessLink.svg";
import DropDown from "./DropDown";
import ProfilePicture from "../Account/ProfilePicture";
import { AuthContext } from "../../App";

const NavLinks = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const navLinks = getNavLinks();

  const handleClick = () => {
    setShowModal(true);
  };

  const { darkTheme } = useContext(AuthContext);

  return (
    <div className={styles.navLinks}>
      <ul>
        {navLinks.map(({ link, icon, text }, i) => {
          return (
            <li key={i}>
              <NavLink to={link}>
                <FontAwesomeIcon
                  icon={icon}
                  style={{
                    height: "20px",
                    width: "20px",
                    color: darkTheme ? "#ffffff99" : "#00000099",
                  }}
                />
                <p style={{ color: darkTheme ? "#ffffff99" : "#00000099" }} className={styles.navListText}>
                  {text}
                </p>
              </NavLink>
            </li>
          );
        })}
        <li>
          <div
            className={styles.profileLink}
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <ProfilePicture />
            <p style={{ color: darkTheme ? "#ffffff99" : "#00000099" }} className={styles.navListText}>
              Me
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
            {showDropDown && <DropDown setShowDropDown={setShowDropDown} />}
          </div>
        </li>
      </ul>
      <div className={styles.businessPremiumLinks}>
        <div
          className={styles.businessLink}
          onClick={handleClick}
          style={{ color: darkTheme ? "#ffffff99" : "#00000099" }}
        >
          <BusinessLink />
          <div>
            For Business <FontAwesomeIcon icon={faCaretDown} />
          </div>
          {showModal && (
            <Business setShowModal={setShowModal} showModal={showModal} />
          )}
          {/* <Business/> */}
        </div>

        <Link to="/premium">Try premium for free</Link>
      </div>
    </div>
  );
};

export default NavLinks;
