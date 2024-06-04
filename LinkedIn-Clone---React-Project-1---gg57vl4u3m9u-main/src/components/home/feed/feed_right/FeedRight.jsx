import React, { useState } from "react";
import "../../../../assets/styles/feedRight.css";
import { IconButton, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import SingleNews from "./SingleNews";

const FeedRight = () => {
  const [newsData, setNewsData] = useState([
    {
      content: "India's Top Startups of 2023",
      time: "3h",
    },
    {
      content: "Quantum dots discovery wins Nobel",
      time: "7h",
    },
    {
      content: "Cyber security spending to soar",
      time: "1d",
    },
    {
      content: "India Inc's legal expenses jump",
      time: "1d",
    },
    {
      content: "Hospitality eyes freshers",
      time: "2d",
    },
    {
      content: "New players enter app cab space",
      time: "3d",
    },
    {
      content: "CEO salaries in sharp focus",
      time: "5d",
    },
  ]);
  return (
    <div className="feed-right-container">
      <div className="feed-right">
        <section className="news-sidebar-right">
          <div className="news-heading">
            <h4>LinkedIn News</h4>
            <Tooltip title="These are the day’s top professional news stories and conversations.">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="news-list">
            {newsData.map((news, index) => {
              return (
                <SingleNews
                  key={index}
                  content={news.content}
                  time={news.content}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeedRight;
