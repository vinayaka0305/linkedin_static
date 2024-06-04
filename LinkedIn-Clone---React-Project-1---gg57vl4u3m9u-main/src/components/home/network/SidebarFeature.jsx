import React from "react";
import { Link } from "react-router-dom";

const SidebarFeature = ({ Icon, title, state }) => {
  return (
    <>
      <Link  to={'/unavailable'}>
        <div className="sidebar-feature-left">
          <Icon />
          <p>{title}</p>
        </div>

        <span>{state}</span>
      </Link>
    </>
  );
};

export default SidebarFeature;
