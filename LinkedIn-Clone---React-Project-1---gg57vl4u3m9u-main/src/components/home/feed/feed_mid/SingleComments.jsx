import { Avatar } from '@mui/material'
import React from 'react'

const SingleComments = ({comment,setShowErrorDialog}) => {

  const handleClick = ()=>{
    setShowErrorDialog(true)
  }

  return (
    <>
        <div className="post-comment">
          <Avatar/>
          <div>
            <div className="post-comment-content">
              <h4>{comment.name}</h4>
              <p>{comment.comment}</p>
            </div>
            <span><button onClick={handleClick}>Like</button></span>
            <span><button onClick={handleClick}>Reply</button></span>
          </div>
            
        </div>
    </>
  )
}

export default SingleComments