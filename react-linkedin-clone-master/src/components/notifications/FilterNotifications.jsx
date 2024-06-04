import React from 'react'
import styles from '../../styles/notifications/FilterNotifications.module.css'

const FilterNotifications = () => {
  return (
    <div className={styles.filterNotifications}>
        <button>All</button>
        <button>My posts</button>
        <button>Mentions</button>
    </div>
  )
}

export default FilterNotifications