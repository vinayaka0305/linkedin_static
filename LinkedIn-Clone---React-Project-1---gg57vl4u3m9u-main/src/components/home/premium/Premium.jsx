import React, { useState } from "react";
import "../../../assets/styles/premium.css";
import { Avatar, Button, Divider } from "@mui/material";
import UnavailableDialog from "../../Errors/UnavailableDialog";

const Premium = () => {
  const userName = sessionStorage.getItem("userName") || "";
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  return (
    <div className="premium-section-container">
      <Divider />
      <div className="premium-top-container">
        <section className="premium-top-section">
          <h3>Achieve your goals faster with Premium.</h3>
          <div>
            <Avatar
              sx={{ width: "50px", height: "50px", marginRight: "-25px" }}
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/651.jpg"
            />
            <Avatar
              sx={{ width: "50px", height: "50px", marginRight: "-25px" }}
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/188.jpg"
            />
            <Avatar
              sx={{ width: "50px", height: "50px", marginRight: "-25px" }}
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1149.jpg"
            />
            <p style={{ marginLeft: "2rem" }}>
              Darrel and millions of other members use Premium.
            </p>
          </div>
          <p>
            Start your free 1-month trial today. Cancel anytime. We’ll send you
            a reminder 7 days before your trial ends.
          </p>
        </section>
      </div>

      <section className="premium-bottom-section">
        <h4>
          {userName} are you interested in Premium for work or personal use?{" "}
        </h4>
        <p>We will recommend the right plan for you.</p>
        <div className="survey-input">
          <section>
            <input type="checkbox" />
            <span>I would use Premium for my personal goals</span>
          </section>
          <section>
            <input type="checkbox" />
            <span>I would use Premium as part of my job</span>
          </section>
          <section>
            <input type="checkbox" />
            <span>Other</span>
          </section>
        </div>
        <Divider />
        <div className="submit-btn">
          <Button variant="contained" sx={{ borderRadius: "25px" }} onClick={() => setShowErrorDialog(true)}>
            Submit
          </Button>
        </div>
      </section>
      <UnavailableDialog open={showErrorDialog} setOpen={setShowErrorDialog} />

    </div>
  );
};

export default Premium;
