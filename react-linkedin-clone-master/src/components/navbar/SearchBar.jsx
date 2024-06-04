import React, { useContext, useState } from "react";
import styles from "../../styles/navbar/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
const SearchBar = () => {
  const {darkTheme} = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/home/search/${searchTerm}`);
  };
  return (
    <form className={styles.searchBarContainer} onSubmit={handleSubmit}>
      <button style={{backgroundColor:darkTheme?"#38434f":"#edf3f8",color:darkTheme?"#ffffffe6":"#000"}}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input
        type="text"
        name="search"
        id="search"
        className={styles.search}
        placeholder="Search"
        autoComplete="off"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        required
        style={{backgroundColor:darkTheme?"#38434f":"#edf3f8",color:darkTheme?"#ffffffe6":"#000"}}
      />
    </form>
  );
};

export default SearchBar;
