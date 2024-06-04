import React from "react";
import "../../../assets/styles/jobs.css";
import JobSidebarFeature from "./JobSidebarFeature";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const Jobs = () => {
  return (
    <div className="jobs-section">
      <section className="jobs-section-left">
        <div>

        <JobSidebarFeature Icon={BookmarkIcon} title={"My Jobs"} />
        <JobSidebarFeature Icon={ListIcon} title={"Preferences"} />
        <JobSidebarFeature Icon={NotificationsIcon} title={"Job Alerts"} />
        <JobSidebarFeature
          Icon={AssignmentTurnedInIcon}
          title={"Skill Assessments"}
        />
        <JobSidebarFeature Icon={DescriptionIcon} title={"Interview Prep"} />
        <JobSidebarFeature
          Icon={SmartDisplayIcon}
          title={"Job seeker guidance"}
        />
        </div>
      </section>
      <section className="jobs-section-mid">
        <div className="recent-jobs-container">
            <h3>Recent Jobs</h3>
            <div className="recent-jobs">
                <Link  to={'/unavailable'}>
                    <span className="recent-job-title">React devloper</span>
                    <span className="recent-job-type"><span>Noida</span></span>
                </Link>
                <Divider/>
                <Link to={'/unavailable'}>
                    <span className="recent-job-title">Frontend devloper</span>
                    <span className="recent-job-type"><span>Remote</span></span>
                </Link>
                <Divider/>
                <Link to={'/unavailable'}>
                    <span className="recent-job-title">Backend devloper</span>
                    <span className="recent-job-type"><span>Pune</span></span>
                </Link>
            </div>
        </div>
      </section>


      <section className="jobs-section-right">
        <div>
          <h3>Job seeker guidance</h3>
          <p>
            Explore our curated guide of expert-led courses, such as how to
            improve your resume and grow your network, to help you land your
            next opportunity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
