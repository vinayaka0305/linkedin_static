import React from "react";
import { NavLink } from "react-router-dom";

const NavFeature = ({ Icon, title, toPath, reqClass, onClickFunc }) => {
  const classNames = `nav-item ${reqClass || ""}`;

  const navLink = onClickFunc ? (
    <NavLink to={toPath} onClick={onClickFunc}>
      <Icon />
      <span>{title}</span>
    </NavLink>
  ) : (
    <NavLink to={toPath}>
      <Icon />
      <span>{title}</span>
    </NavLink>
  );
  return <div className={classNames}> {navLink}</div>;
};

export default NavFeature;
