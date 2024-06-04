import React, { useEffect, useRef, useState } from "react";
import "../../../assets/styles/userProfile.css";
import { Avatar, Button, Divider } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router";
import { getUserInfo } from "../../../utils/apis/getUserInfo";
import UnavailableDialog from "../../Errors/UnavailableDialog";
import { useProfileImage } from "../../../ProfilePictureContext";

const MyProfile = () => {
  const userName = sessionStorage.getItem("userName");
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  // const [profileImg1, setProfileImg] = useState(false);
  const {profileImg,updateProfileImg} = useProfileImage()

  // useEffect(()=>{
  //   getUserInfo(userId)
  // },[])

  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // setImageSrc(imageUrl);
      updateProfileImg(imageUrl);
    }
  };

  return (
    <div className="profile-main-container">
      <div className="user-profile-section">
        <section className="profile-left">
          <div className="user-info">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAkq1F1Jv91R3CKq4KVcKHMaTIBKGbsWWGpDWPbol2TeCemoCd6utLcZIvw93qW7epAB_oDursXeka8_FaLzN87TPDmJn_ZvugL4LQ8zC2fOl3vBlB5cjhvS8Tspn7JPdbZkI8_WXlp9xsGcb7I2kjiEbu6UQmUGBQOacgpPFHEK3HIbQOpJ8d9ZXp3A/s16000/Linkedin%20Cover%20Photo%201.jpg"
              alt="profile-cover"
            />
            {profileImg ? (
              <Avatar
                src={profileImg}
                sx={{
                  width: 150,
                  height: 150,
                  marginTop: "-90px",
                  marginLeft: "30px",
                }}
              />
            ) : (
              //</div>   <img  alt="your-dp" />
              // </Avatar >
              <Avatar
                sx={{
                  width: 150,
                  height: 150,
                  marginTop: "-90px",
                  marginLeft: "30px",
                }}
              />
            )}

            <h4 className="user-title">{userName}</h4>
            <p className="user-summary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
            <div className="action-buttons">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}
                onClick={() => setShowErrorDialog(true)}
              >
                I am...
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "25px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}
                onClick={() => fileInputRef.current.click()}
              >
                Edit profile
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#666666",
                  color: "#666666",
                  borderRadius: "25px",
                  height: "1.6rem",
                }}
                onClick={() => setShowErrorDialog(true)}
              >
                More
              </Button>
            </div>
          </div>
          <div className="about-user">
            <h4>About</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. <br />
              You need to be sure there isn't anything embarrassing hidden in
              the middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet.
            </p>
          </div>
          <div className="user-education">
            <h4>Education</h4>
            <Divider />
            <div className="edu-details">
              <Avatar
                sx={{ height: "60px", width: "60px" }}
                src="https://media.istockphoto.com/id/876177980/vector/university-vector.jpg?s=2048x2048&w=is&k=20&c=P74kJA80i12oez5l6YcunRlZg_MNYqO3XGIErmLJMP0="
              />
              <div className="uni-info">
                <h3>
                  Bharati Vidyapeeth University College Of Engineering, Pune
                </h3>
                <p style={{ color: "#282828" }}>
                  Bachelor of Technology - B.Tech
                </p>
                <span>Jul 2018 - Jul 2022</span>
              </div>
            </div>
          </div>
          <div className="user-skills">
            <h4>Skills</h4>
            <Divider />
            <div className="skills-section">
              <p>React</p>
              <p>Material Ui</p>
              <p>Javascript</p>
              <p>CSS</p>
            </div>
          </div>
        </section>
        <section className="profile-right">
          <div className="premium-section">
            <div className="ad-icon">
              <span>Ad</span>
              <MoreHorizIcon />
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "0.86rem",
                margin: "1rem",
              }}
            >
              {userName}, boost your job search with premium
            </div>
            <div className="avatar-icons">
              <Avatar sx={{ backgroundColor: "#095faa" }}>R</Avatar>
              <Avatar sx={{ backgroundColor: "#aa0941" }}>KL</Avatar>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "0.86rem",
                margin: "1rem",
              }}
            >
              See who's viewed your profile in last 90 days
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate("/premium");
                }}
                variant="outlined"
                sx={{ borderRadius: "25px" }}
              >
                Try for FREE
              </Button>
            </div>
          </div>
        </section>
      </div>
      <UnavailableDialog open={showErrorDialog} setOpen={setShowErrorDialog} />
    </div>
  );
};

export default MyProfile;
