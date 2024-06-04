import React, { useContext } from "react";
import blankPicture from "../../assets/coverPicture/LinkedIn-Default-Background.png";
import styles from "../../styles/userProfile/Education.module.css";
import {AuthContext} from '../../App';

const Education = ({ education }) => {

  const {darkTheme} = useContext(AuthContext);

  return (
    <div className={styles.container} style={{backgroundColor:darkTheme?"#1b1f23":"#fff",color:darkTheme?"#fff":"#000"}}>
      <h3>Education</h3>
      <ul>
        {education.map(
          ({ degree, description, startDate, endDate, schoolName }, i) => {
            return (
              <li key={i} style={{borderBottom:`1px solid ${darkTheme?"#ffffff30":"#00000030"}`}}>
                <div>
                  <img src={blankPicture} alt="collegeIcon" />
                </div>
                <div>
                  <h4>{schoolName}</h4>
                  <p>{degree}</p>
                  <p>
                    {" "}
                    <small> {description}</small>
                  </p>
                  <p style={{color:darkTheme?"#ffffff99":"#00000099"}}>
                    {startDate.slice(0, 4)}-{endDate.slice(0, 4)}
                  </p>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Education;
