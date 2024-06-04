import {
  faPhone,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styles from "../../styles/userProfile/ContactInfo.module.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../App";

const ContactInfo = ({ email, name, phone, createdAt, setShowContactInfo }) => {
  const { darkTheme } = useContext(AuthContext);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: darkTheme ? "#00000080" : "#ffffff80" }}
    >
      <div
        className={styles.card}
        style={{
          backgroundColor: darkTheme ? "#1b1f23" : "#fff",
          border: `1px solid ${darkTheme ? "#ffffff11" : "#00000011"}`,
        }}
      >
        <header>
          <p>{name}</p>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setShowContactInfo(false)}
          />
        </header>
        <section>
          <p>Contact Info</p>
          <div className={styles.infoList}>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <p>Email</p>
                <p>{email}</p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <p>Phone</p>
                <p>{phone}</p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <div>
                <p>Connected</p>
                <p>{createdAt.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactInfo;
