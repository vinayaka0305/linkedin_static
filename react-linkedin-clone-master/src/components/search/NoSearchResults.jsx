import React, { useContext } from 'react'
import styles from '../../styles/search/NoSearchResults.module.css'
import emptyRoom from '../../assets/noResultsFound/no-search-results.svg'
import { AuthContext } from '../../App'

const NoSearchResults = () => {
  const {darkTheme} = useContext(AuthContext);
  return (
    <div className={styles.container}>
        <div style={{backgroundColor:darkTheme?"#1b1f23":"#fff"}}>
        <img src={emptyRoom} alt="no-search-results"/>
        <h3 style={{color:darkTheme?"#fff":"#000"}}>No Results Found</h3>
        <p style={{color:darkTheme?"#ffffff99":"#00000099"}}>Try shortening or rephrasing your search</p>
        </div>
    </div>
  )
}

export default NoSearchResults