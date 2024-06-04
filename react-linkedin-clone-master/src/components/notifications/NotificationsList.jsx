import React from "react";
import styles from "../../styles/notifications/NotificationList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { getArrayOfNotifications } from "../../utils/getArrayOfNotifications";

const NotificationsList = () => {
  const arrayOfNotifications = getArrayOfNotifications();
  return (
    <div className={styles.notificationsList}>
      {arrayOfNotifications.map(({ image, info }, i) => {
        return (
          <div className={styles.notification} key={i}>
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <p>{info}</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        );
      })}
    </div>
  );
};

export default NotificationsList;
