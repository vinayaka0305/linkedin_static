import React, { useEffect, useState } from "react";

import "../../../assets/styles/feed.css";
import FeedLeft from "./feed_left/FeedLeft";
import FeedMid from "./feed_mid/FeedMid";
import FeedRight from "./feed_right/FeedRight";

const Feed = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(sessionStorage.getItem("loginStatus"))
  );

  const scrollToTop = ()=>{
    window.scrollTo({top: 0,behavior: 'smooth'});
  }
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "loginStatus") {
        setIsLoggedIn(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    scrollToTop()

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="feed-section">
      <FeedLeft />
      <FeedMid />
      <FeedRight />
    </div>
  );
};

export default Feed;
