import React, { useContext } from 'react'
import { AuthContext } from '../../App'

const ProfilePicture = () => {

  const {profileImage} = useContext(AuthContext);

  return (
    <div>
        <img src={profileImage} alt="profile" />
    </div>
  )
}

export default ProfilePicture