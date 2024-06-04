import React, { useContext, useState } from "react";
import styles from '../../styles/search/SearchResultsCard.module.css'
import { AuthContext } from '../../App'
import defaultProfile from '../../assets/defaultPost/defaultProfile.png'

const SearchResultsCard = ({ author:{name,profileImage}, searchTerm }) => {
    const [following,setFollowing] = useState(false);
    const {darkTheme} = useContext(AuthContext);
  return (
    <div className={styles.container} style={{border:`1px solid ${darkTheme?"#ffffff50":"#00000050"}`}}>
      <div className={styles.imageContainer}>
        <img src={profileImage==null?defaultProfile:profileImage} alt="profile" />
      </div>
      <div className={styles.textContainer}>
        <p><a href="#" style={{color:darkTheme?"#fff":"#000"}}>{name}</a></p>
        <p style={{color:darkTheme?"#fff":"#000"}}><small>Talks about #{searchTerm}</small></p>
        <p style={{color:darkTheme?"#ffffff99":"#00000099"}}><small>32K followers</small></p>
      </div>
      <button onClick={()=>setFollowing(!following)}>{following?"Following":"Follow"}</button>
    </div>
  );
};

export default SearchResultsCard;
