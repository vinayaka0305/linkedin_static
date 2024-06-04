import React, { createContext, useContext, useState } from "react";

const ProfilePictureContext = createContext();

export function DpProvider({ children }) {
  const [profileImg, setProfileImg] = useState('');

  const updateProfileImg = (newStatus) => {
    setProfileImg(newStatus);
  };

  return (
    <ProfilePictureContext.Provider value={{ profileImg, updateProfileImg }}>
      {children}
    </ProfilePictureContext.Provider>
  );
}

export function useProfileImage() {
  const context = useContext(ProfilePictureContext);
  return {
    profileImg: context.profileImg,
    updateProfileImg: context.updateProfileImg,
  };
}