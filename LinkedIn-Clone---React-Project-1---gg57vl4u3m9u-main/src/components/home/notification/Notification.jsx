import React, { useState } from "react";
import SingleNoti from "./SingleNoti";
import "../../../assets/styles/notification.css";
import { Button } from "@mui/material";
import UnavailableDialog from "../../Errors/UnavailableDialog";

const Notification = () => {
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  return (
    <div className="notification-section">
      <section className="notification-filter-button">
        <Button
          variant="contained"
          sx={{
            height: "2rem",
            color: "white",
            borderRadius: "25px",
            backgroundColor: "#01754F",
            "&:hover": {
              backgroundColor: "#005136",
            },
          }}
        >
          All
        </Button>
        <Button
          variant="outlined"
          onClick={() => setShowErrorDialog(true)}
          sx={{
            height: "2rem",
            color: "#666666",
            borderColor: "#666666",
            borderRadius: "25px",
            "&:hover": {
              backgroundColor: "#dcd6d6",
              border: "2px solid #666666",
            },
          }}
        >
          My posts
        </Button>
        <Button
          variant="outlined"
          onClick={() => setShowErrorDialog(true)}
          sx={{
            height: "2rem",
            color: "#666666",
            borderColor: "#666666",
            borderRadius: "25px",
            "&:hover": {
              backgroundColor: "#dcd6d6",
              border: "2px solid #666666",
            },
          }}
        >
          Mentions
        </Button>
      </section>
      <section className="notification-container">
        <SingleNoti
          image={
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/572.jpg"
          }
          content={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
          time={"2h"}
        />
        <SingleNoti
          image={
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1014.jpg"
          }
          content={
            "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English."
          }
          time={"5h"}
        />
        <SingleNoti
          image={
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/431.jpg"
          }
          content={
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy."
          }
          time={"1d"}
        />
        <SingleNoti
          image={
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/51.jpg"
          }
          content={
            "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
          }
          time={"2d"}
        />
      </section>
      <UnavailableDialog open={showErrorDialog} setOpen={setShowErrorDialog} />

    </div>
  );
};

export default Notification;
