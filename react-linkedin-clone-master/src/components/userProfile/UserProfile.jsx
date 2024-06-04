import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getProjectID } from "../../utils/authentication/getProjectID";
import UserProfileCard from "./UserProfileCard";
import Skills from "./Skills";
import Education from "./Education";
import PremiumCard from '../home/PremiumCard';
import Footer from '../home/Footer';

const UserProfile = () => {
  const token = JSON.parse(localStorage.getItem("jwtToken"));
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState();

  const userProfileApiCall = () => {
    axios
      .get(`https://academics.newtonschool.co/api/v1/linkedin/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: `${getProjectID()}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setUserInfo({...res.data.data})
      })
      .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    userProfileApiCall();
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center" ,marginTop:"5rem",gap:"2vw"}}>
        {userInfo&&<div style={{display:"flex",flexDirection:"column",gap:"1vh",width: "60%"}}>
        <UserProfileCard {...userInfo}/>
          <Skills skills={userInfo.skills}/>
          <Education education={userInfo.education}/>
        </div>}
        <div>
        <PremiumCard/>
        <Footer/>
        </div>
    </div>
  );
};

export default UserProfile;
