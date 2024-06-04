import React from 'react'
import { Link } from 'react-router-dom'

const JobSidebarFeature = ({Icon, title}) => {
  return (
    <Link to={'/unavailable'} className='job-sidebar-feature'>
        <Icon/>
        <span>{title}</span>
    </Link>
  )
}

export default JobSidebarFeature