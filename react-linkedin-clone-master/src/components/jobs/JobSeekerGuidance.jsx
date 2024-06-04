import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/jobs/JobSeekerGuidance.module.css';
import React from "react";
import Footer from '../home/Footer';
import { ToastContainer, toast } from "react-toastify";

const JobSeekerGuidance = () => {
  const notify =()=> toast.info("Under Construction!");
  return (
    <div className={styles.jobSeekerGuidanceSection}>
    <div className={styles.jobSeekerGuidanceCard}>
      <header>
        <h4>Job seeker guidance</h4>
        <p>Recommended based on your activity</p>
      </header>
      <section className={styles.imageContainer}>
        <p>I want to improve my resume</p>
        <div>
        </div>
      </section>
      <section className={styles.showMoreContainer}>
        <p>
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </p>
        <ToastContainer/>
        <a href="#" onClick={notify}>
          Show more
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default JobSeekerGuidance;
