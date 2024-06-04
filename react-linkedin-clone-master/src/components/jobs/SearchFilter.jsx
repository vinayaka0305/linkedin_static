import {
  faArrowsRotate,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/jobs/SearchFilter.module.css";
import React from "react";
import { getArrayOfSuggestions } from "../../utils/getArrayOfSearchFilterSuggestions";

const SearchFilter = () => {
  const arrayOfSuggestions = getArrayOfSuggestions();

  return (
    <div className={styles.searchFilterContainer}>
      <header>
        <h3>
          Suggested job searches
          <button>
            <FontAwesomeIcon icon={faArrowsRotate} />
            New jobs
          </button>
        </h3>
        <FontAwesomeIcon icon={faXmark} />
      </header>
      <main>
        {arrayOfSuggestions.map((data, i) => {
          return (
            <button key={i}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              {data}
            </button>
          );
        })}
      </main>
    </div>
  );
};

export default SearchFilter;
