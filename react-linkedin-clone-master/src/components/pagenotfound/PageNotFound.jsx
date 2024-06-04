import React from "react";
import styles from '../../styles/ErrorPage.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const footerLinks = [
    "User Agreement",
    "Privacy Policy",
    "Community Guidelines",
    "Cookie Policy",
    "Copyright Policy",
    "Guest Controls",
  ];

  const navigate = useNavigate();

  return (
    <div className={styles.pageNotFound}>
      <header>
        <h2 className={styles.header}>
          Linked
          <FontAwesomeIcon icon={faLinkedin} />
        </h2>
      </header>
      <main>
        <div></div>
        <h2>This page doesn't exist</h2>
        <p>Please check your URL or return to LinkedIn home.</p>
        <button onClick={() => navigate("/home/feed")}>Go to your feed</button>
      </main>
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
      </footer>
    </div>
  );
};

export default PageNotFound;
