import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";

const Logo = () => {
  const { darkTheme } = useContext(AuthContext);
  return (
    <Link to={"/home"}>
      <FontAwesomeIcon
        icon={faLinkedin}
        style={{ color: darkTheme ? "#fff" : "#007fbc", height: "2.5rem" }}
      />
    </Link>
  );
};

export default Logo;
