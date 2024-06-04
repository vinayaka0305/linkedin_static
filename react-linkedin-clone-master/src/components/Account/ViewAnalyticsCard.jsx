import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AuthContext } from "../../App";
import styles from "../../styles/accountprofile/ViewAnalyticsCard.module.css";

const ViewAnalyticsCard = () => {
  const { darkTheme } = useContext(AuthContext);

  return (
    <div
      className={styles.analyticsContainer}
      style={{ backgroundColor: darkTheme ? "#1b1f23" : "#fff" }}
    >
      <div>
        <p style={{ color: darkTheme ? "#fff" : "#000" }}>10 profile viewers</p>
        <p>past 90 days</p>
      </div>
      <a href="#">
        View all analytics <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  );
};

export default ViewAnalyticsCard;
