import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { getLoginFooterLinks } from '../../utils/getFooterLinks';
import styles from "../../styles/footer/LoginFooter.module.css";

const LoginFooter = () => {
  const footerLinks = getLoginFooterLinks();

  return (
    <footer className={styles.footer}>
        <p>
          Linked
          <FontAwesomeIcon icon={faLinkedin} />
        </p>
        <p>&copy; 2023</p>
        {footerLinks.map((link, i) => {
          return (
            <a href="#" key={i}>
              {link}
            </a>
          );
        })}
        <select>
          <option value="Language">Language</option>
        </select>
      </footer>
  )
}

export default LoginFooter;