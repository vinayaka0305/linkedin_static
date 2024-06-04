import React, { useContext } from "react";
import styles from "../../styles/accountprofile/AccountProfileCard.module.css";
import ProfilePicture from "./ProfilePicture";
import { getLoggedUserProfileData } from "../../utils/getProfileData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../App";

const AccountProfileCard = () => {
  const { skills, address, followers, connections, collegeLogo, collegeName } =
    getLoggedUserProfileData();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const {setProfileImage} = useContext(AuthContext);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const { darkTheme } = useContext(AuthContext);

  return (
    <div
      className={styles.accountProfileCard}
      style={{
        color: darkTheme ? "#ddd" : "#333",
        backgroundColor: darkTheme ? "#1b1f23" : "#fff",
      }}
    >
      <div className={styles.profilePicContainer}>
        <ProfilePicture />
        <div>
          {" "}
          <label htmlFor="editProfile">
            <FontAwesomeIcon icon={faPencil} />{" "}
            <input
              type="file"
              name="editProfile"
              id="editProfile"
              onChange={onImageChange}
            />{" "}
          </label>{" "}
        </div>
      </div>
      <div className={styles.personalInformationContainer}>
        <div>
          <h2>{userInfo && userInfo.name}</h2>
          <div
            className={styles.skills}
            style={{ color: darkTheme ? "#ffffff99" : "#00000099" }}
          >
            {skills.map((skill, i) => (
              <p key={i}>{skill}</p>
            ))}
          </div>
          <p
            className={styles.address}
            style={{ color: darkTheme ? "#ffffff99" : "#00000099" }}
          >
            {address}
            <span>Contact info</span>
          </p>
          <div className={styles.followersAndConnections}>
            <p>{followers} followers</p>.<p>{connections} connections</p>
          </div>
        </div>
        <div className={styles.collegeContainer}>
          <div>
            <img src={collegeLogo} alt="college-logo-img" />
          </div>
          <p>{collegeName}</p>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button>I want to...</button>
        <button>Add profile section</button>
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

export default AccountProfileCard;
