import React from "react";
import styles from "../../styles/jobs/RecommendedJobs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { getArrayOfJobData } from "../../utils/getJobLinks";

const RecommendedJobs = () => {
  const arrayOfJobData = getArrayOfJobData();
  return (
    <div className={styles.recommendedJobsContainer}>
      <header>
        <h3>Recommended for you</h3>
        <p>Based on your profile and search history</p>
      </header>
      <main>
        {arrayOfJobData.map(({ image, role, company }, i) => {
          return (
            <div className={styles.companyCard} key={i}>
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <a href="#">{role}</a>
                <h4>{company}</h4>
                <p>Chennai, Tamil Nadu, India (On-site)</p>
                <p>Promoted</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faBookmark} />
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
          );
        })}
      </main>
      <button>
        Show all <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default RecommendedJobs;
