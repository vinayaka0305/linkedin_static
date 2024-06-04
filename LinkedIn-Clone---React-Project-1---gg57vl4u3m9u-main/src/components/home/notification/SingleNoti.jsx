import { Avatar } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';

const SingleNoti = ({image, content, time}) => {
  return (
    <div className='single-notification'>
        <Avatar sx={{width:60, height:60}} src={image}/>
        <Link to={'/unavailable'}>{content}</Link>
        <div><span>{time}</span><MoreHorizIcon/> </div>

    </div>
  )
}

export default SingleNoti