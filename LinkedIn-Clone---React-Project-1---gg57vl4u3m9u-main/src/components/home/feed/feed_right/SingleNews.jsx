import React from "react";
import { Link } from "react-router-dom";

const SingleNews = ({content, time}) => {
  return (
    <>
      <Link to={'/unavailable'}>
        <li>
          <p>{content}</p>
          <span>{time} ago</span>
        </li>
      </Link>
    </>
  );
};

export default SingleNews;
