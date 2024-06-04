import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectID } from "../../utils/authentication/getProjectID";
import NoSearchResults from "./NoSearchResults";
import SearchResultsCard from "./SearchResultsCard";
import styles from "../../styles/search/SearchResults.module.css";
import PremiumCard from "../home/PremiumCard";
import Footer from "../home/Footer";
import { Post } from "../home/Post";
import { AuthContext } from "../../App";

const SearchResults = () => {
  const { searchterm } = useParams();
  const [listOfResults, setListOfResults] = useState([]);
  const {darkTheme} = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `https://academics.newtonschool.co/api/v1/linkedin/post?search={"content":"${searchterm}"}`,
        {
          headers: {
            projectID: `${getProjectID()}`,
          },
        }
      )
      .then((res) => setListOfResults(res.data.data))
      .catch((err) => console.log(err.response.data.message));
  }, [searchterm]);

  return (
    <div style={{ marginTop: "5rem" }}>
      {listOfResults.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.successResults} style={{backgroundColor:darkTheme?"#1b1f23":"#fff"}}>
            <div>
              <h2 style={{color:darkTheme?"#fff":"#000"}}>People who talk about #{searchterm}</h2>
              <div>
                {listOfResults.map((data, i) => {
                  return (
                    <SearchResultsCard
                      key={i}
                      {...data}
                      searchTerm={searchterm}
                    />
                  );
                })}
              </div>
            </div>
            <div>
            <h2 style={{color:darkTheme?"#fff":"#000",borderBottom:`1px solid ${darkTheme?"#ffffff50":"#00000050"}`,borderTop:`1px solid ${darkTheme?"#ffffff50":"#00000050"}`}}>Posts</h2>
              {listOfResults.map((data, i) => {
                return <Post key={i} {...data} />;
              })}
            </div>
          </div>  
          <div>
            <PremiumCard />
            <Footer />
          </div>
        </div>
      ) : (
        <NoSearchResults />
      )}
    </div>
  );
};

export default SearchResults;
