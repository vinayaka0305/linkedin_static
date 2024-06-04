import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFile, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark,
  faClipboardCheck,
  faGear,
  faListUl,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/jobs/Options.module.css";
import React from "react";

const Options = () => {
  return (
    <div className={styles.optionsSection}>
      <div className={styles.optionsContainer}>
        <div>
          <FontAwesomeIcon icon={faBookmark} />
          My jobs
        </div>
        <div>
          <FontAwesomeIcon icon={faListUl} />
          Preferences
        </div>
        <div>
          <FontAwesomeIcon icon={faClipboardCheck} />
          Skill Assessments
        </div>
        <div>
          <FontAwesomeIcon icon={faNoteSticky} />
          Interview prep
        </div>
        <div>
          <FontAwesomeIcon icon={faFile} />
          Resume Builder
        </div>
        <div>
          <FontAwesomeIcon icon={faYoutube} />
          Job seeker guidance
        </div>
        <div>
          <FontAwesomeIcon icon={faGear} />
          Application settings
        </div>
      </div>
      <button>
        <FontAwesomeIcon icon={faPenToSquare} />
        Post a free job
      </button>
    </div>
  );
};

export default Options;
