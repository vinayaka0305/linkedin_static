import React, { useContext } from 'react'
import styles from '../../styles/userProfile/Skills.module.css'
import { AuthContext } from "../../App";

const Skills = ({skills}) => {
  const {darkTheme} = useContext(AuthContext);
  return (
    <div className={styles.container} style={{backgroundColor:darkTheme?"#1b1f23":"#fff",color:darkTheme?"#fff":"#000"}}>
        <h3>Skills</h3>
        <ul>
            {skills.map((skill,i)=> <li key={i} style={{borderBottom: `1px solid ${darkTheme?"#ffffff30":"#00000030"}`}}><p>{skill}</p></li> )}
        </ul>
    </div>
  )
}

export default Skills