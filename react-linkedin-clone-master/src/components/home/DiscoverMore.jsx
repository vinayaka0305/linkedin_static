import React, { useContext } from "react";
import styles from "../../styles/home/DiscoverMore.module.css";
import { AuthContext } from "../../App";

const DiscoverMore = () => {
  const {darkTheme} = useContext(AuthContext);
  return (
    <div className={styles.discoverMore} style={{backgroundColor:darkTheme?"#1b1f23":"#fff"}}>
      <p>Groups</p>
      <section>
        <p>Events</p>
        <span style={{color:darkTheme?"#ddd":"#333"}}>+</span>
      </section>
      <p>Followed Hashtags</p>
      <div style={{color:darkTheme?"#fff":"#000",borderTop: `1px solid ${darkTheme ? "#ffffff33" : "#00000033"}`}}>Discover more</div>
    </div>
  );
};

export default DiscoverMore;
