import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "../../styles/home/ProfileCard.module.css";
import { getSkills } from "../../utils/home/getSkills";
import ProfilePicture from "../Account/ProfilePicture";
import CoverPicture from "../Account/CoverPicture";
import { useContext } from "react";
import { AuthContext } from "../../App";

export const ProfileCard = () => {
  const { darkTheme } = useContext(AuthContext);
  const color = darkTheme ? "#ffffff99" : "#00000099";
  const skills = getSkills();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div
      className={styles.profileCard}
      style={{ backgroundColor: darkTheme ? "#1b1f23" : "#fff" }}
    >
      <CoverPicture />
      <div className={styles.profileContainer}>
        <ProfilePicture/>
      </div>
      <Link
        className={styles.profileCardName}
        to={"account"}
        style={{ color: darkTheme ? "#ddd" : "#333" }}
      >
        {userInfo && userInfo.name}
      </Link>
      <div className={styles.profileCardSkills} style={{ color }}>
        {skills.map((skill, i) => (
          <p key={i}>{skill}</p>
        ))}
      </div>
      <div
        className={styles.profileStats}
        style={{
          borderTop: `1px solid ${darkTheme ? "#ffffff33" : "#00000033"}`,
          borderBottom: `1px solid ${darkTheme ? "#ffffff33" : "#00000033"}`,
        }}
      >
        <p style={{ color }}>
          Profile viewers<span>18</span>
        </p>
        <p style={{ color }}>
          Post impressions<span>8</span>
        </p>
      </div>
      <div className={styles.profileCardPremiumLink} style={{ color }}>
        Access exclusive tools & insights
        <div>
          <FontAwesomeIcon icon={faSquare} />
          <Link to={"/premium"} style={{ color: darkTheme ? "#fff" : "#000" }}>
            Try Premium for free
          </Link>
        </div>
      </div>
      <div
        style={{
          color: darkTheme ? "#fff" : "#000",
          borderTop: `1px solid ${darkTheme ? "#ffffff33" : "#00000033"}`,
        }}
      >
        <FontAwesomeIcon
          icon={faBookmark}
          style={{ color: darkTheme ? "#ddd" : "#333" }}
        />
        My items
      </div>
    </div>
  );
};
