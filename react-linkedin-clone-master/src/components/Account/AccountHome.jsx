import React from "react";
import AccountProfileCard from "./AccountProfileCard";
import ViewAnalyticsCard from "./ViewAnalyticsCard";

const AccountHome = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "5rem",
      }}
    >
      <ViewAnalyticsCard />
      <AccountProfileCard />
    </div>
  );
};

export default AccountHome;
