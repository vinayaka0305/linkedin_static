import React, { useContext, useState } from "react";
import styles from "../../styles/userProfile/UserProfile.module.css";
import {
  faLock,
  faUserCheck,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../App";
import ContactInfo from "./ContactInfo";

const UserProfileCard = ({
  name,
  profileImage,
  skills,
  address,
  email,
  phone,
  createdAt,
}) => {
  const { darkTheme } = useContext(AuthContext);
  const [connected, setConnected] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  return (
    <div
      className={styles.accountProfileCard}
      style={{
        backgroundColor: darkTheme ? "#1b1f23" : "#fff",
        color: darkTheme ? "#ddd" : "#333",
      }}
    >
      <div className={styles.profilePicContainer}>
        <div>
          <img src={profileImage} alt="profile-image" />
        </div>
      </div>
      <div className={styles.personalInformationContainer}>
        <div>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.skills}>
            {skills.map((skill, i) => (
              <p key={i}>{skill}</p>
            ))}
          </div>
          <div
            className={styles.address}
            style={{ color: darkTheme ? "#ffffff99" : "#00000099" }}
          >
            <p>{address[0].city},</p>
            <p>{address[0].state},</p>
            <p>{address[0].country}.</p>
            <p onClick={() => setShowContactInfo(true)}>Contact Info.</p>
          </div>
          {showContactInfo && (
            <ContactInfo
              name={name}
              email={email}
              phone={phone}
              createdAt={createdAt}
              setShowContactInfo={setShowContactInfo}
            />
          )}
          <div className={styles.followersAndConnections}>
            <p>76 followers</p>.<p>{connected ? 60 : 59} connections</p>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          onClick={() => setConnected(!connected)}
          style={{ color: darkTheme ? "#1b1f23" : "#fff" }}
        >
          <FontAwesomeIcon icon={connected ? faUserCheck : faUserPlus} />
          {connected ? "Connection" : "Connect"}
        </button>
        <button>
          <FontAwesomeIcon icon={faLock} />
          Message
        </button>
        <button
          style={{
            color: darkTheme ? "#fff" : "#000",
            border: `2px solid ${darkTheme ? "#fff" : "#000"}`,
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
