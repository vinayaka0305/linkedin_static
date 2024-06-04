import {
  faChevronDown,
  faChevronUp,
  faCircleDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useRef, useState } from "react";
import { getNewsList } from "../../utils/home/getNewsList";
import styles from '../../styles/home/NewsCard.module.css';
import { AuthContext } from "../../App";

const News = () => {
  const {darkTheme} = useContext(AuthContext);

  const color = darkTheme?"#ddd":"#333";

  const newsList = getNewsList();
  const splicedList = newsList.slice(0, 5);

  const [showLess, setShowLess] = useState(false);
  const [newsArray, setNewsArray] = useState(splicedList);
  const modalRef = useRef();

  const handleShowMore = () => {
    setShowLess(true);
    setNewsArray(newsList);
  };

  const handleShowLess = () => {
    setShowLess(false);
    setNewsArray(splicedList);
  };

  return (
    <div className={styles.newsCard} style={{color,backgroundColor:darkTheme?"#1b1f23":"#fff"}}>
      <div className={styles.newsCardHeader}>
        <p>LinkedIn News</p>
        <i onClick={()=>{modalRef.current.style.display="flex"}}>i</i>
      </div>
      <section className={styles.newsCardList}>
        {newsArray.map((data, i) => {
          return (
            <div key={i}>
              <section>
                <FontAwesomeIcon icon={faCircleDot} />
                <p>{data.headLine}</p>
              </section>
              <p style={{color:darkTheme?"#ffffff99":"#00000099"}}>{data.telecastedAt} ago</p>
            </div>
          );
        })}
      </section>
        <button onClick={showLess?handleShowLess:handleShowMore} style={{color}}>
          {showLess?"Show less":"Show more"} <FontAwesomeIcon icon={showLess?faChevronUp:faChevronDown} />
        </button>
      <section className={styles.iCardTextHolder} ref={modalRef} style={{backgroundColor:darkTheme?"#1b1f23":"#fff"}}>
        <p>These are the day`s top professional news stories and conversations. <span>Learn more</span> about how they`re selected.</p>
        <FontAwesomeIcon icon={faXmark} onClick={()=>modalRef.current.style.display="none"}/>
      </section>
    </div>
  );
};

export default News;
