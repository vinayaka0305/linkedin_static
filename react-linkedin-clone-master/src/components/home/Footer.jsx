import React, { useContext } from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getHomeFooterLinks } from "../../utils/getFooterLinks";
import styles from '../../styles/footer/HomeFooter.module.css';
import { AuthContext } from "../../App";

const Footer = () => {
  const arrayOfFooterLinks = getHomeFooterLinks();
  const {darkTheme} = useContext(AuthContext);
  return (
    <div className={styles.footer}>
      <section className={styles.footerLinks}>
        {arrayOfFooterLinks.map((link, i) => {
          return <p key={i} style={{color:darkTheme?"#ffffff99":"#00000099"}}>{link}</p>;
        })}
      </section>
      <section className={styles.footerText} style={{ color:darkTheme? "#fff":"#000" }}>
        <span>
          Linked <FontAwesomeIcon icon={faLinkedin} />
        </span>
        LinkedIn Corporation &copy; 2023
      </section>
    </div>
  );
};

export default Footer;
