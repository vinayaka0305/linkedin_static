import React, { useEffect, useRef, useState } from "react";
import "../../../assets/styles/userProfile.css";
import { Avatar, Button, CircularProgress, Divider } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate, useParams } from "react-router";
import { getUserInfo } from "../../../utils/apis/getUserInfo";
import UnavailableDialog from "../../Errors/UnavailableDialog";
import DoneIcon from "@mui/icons-material/Done";
import { followAUser, unfollowAUser } from "../../../utils/apis/userActionAPIs";

const UserProfiles = () => {
  const userName = sessionStorage.getItem("userName");

  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);

  const [followLoading, setFollowLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await getUserInfo(id);
      console.log(res);
      if (res.status === "fail") {
        setUserNotFound(true);
        console.log('setted');
      } else {
        setUserInfo(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const handleFollow = async () => {
    try {
      setFollowLoading(true);
      let res;
      if (userInfo.isFollowed) {
        res = await unfollowAUser(id);
      } else {
        res = await followAUser(id);
      }

      if (res.status === "success") {
        console.log(res);
        setUserInfo((prevInfo) => ({
          ...prevInfo,
          isFollowed: !prevInfo.isFollowed,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFollowLoading(false);
    }
  };

  return (
    <div className="profile-main-container">
      <div className="user-profile-section">
        {isLoading ? (
          <div className="profile-left">Loading...</div>
        ) : userNotFound ? (
          <>
            <div className="profile-left">This user does not exists.</div>
          </>
        ) : (
          <section className="profile-left">
            <div className="user-info">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAkq1F1Jv91R3CKq4KVcKHMaTIBKGbsWWGpDWPbol2TeCemoCd6utLcZIvw93qW7epAB_oDursXeka8_FaLzN87TPDmJn_ZvugL4LQ8zC2fOl3vBlB5cjhvS8Tspn7JPdbZkI8_WXlp9xsGcb7I2kjiEbu6UQmUGBQOacgpPFHEK3HIbQOpJ8d9ZXp3A/s16000/Linkedin%20Cover%20Photo%201.jpg"
                alt="profile-cover"
              />

              <Avatar
                src={userInfo?.profileImage}
                sx={{
                  width: 150,
                  height: 150,
                  marginTop: "-90px",
                  marginLeft: "30px",
                }}
              />

              <h4 className="user-title">{userInfo?.name}</h4>
              <p className="user-summary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters
              </p>
              <div className="action-buttons">
                <Button
                  variant={userInfo?.isFollowed ? "outlined" : "contained"}
                  sx={{
                    borderRadius: "25px",
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                  onClick={handleFollow}
                >
                  {followLoading ? (
                    <CircularProgress
                      style={{ width: "24px", height: "24px" }}
                      color="inherit"
                    />
                  ) : !userInfo?.isFollowed ? (
                    <>
                      <PersonAddIcon />
                      Follow
                    </>
                  ) : (
                    <>
                      <>
                        <DoneIcon />
                        Following
                      </>
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => setShowErrorDialog(true)}
                  variant="outlined"
                  sx={{
                    borderRadius: "25px",
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Message
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#666666",
                    color: "#666666",
                    borderRadius: "25px",
                    textTransform: "capitalize",
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
                the middle of text. All the Lorem Ipsum generators on the
                Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet.
              </p>
            </div>
            <div className="user-education">
              <h4>Education</h4>
              <Divider />
              {userInfo?.education?.map((info, i) => (
                <div key={i} className="edu-details">
                  <Avatar
                    sx={{ height: "60px", width: "60px" }}
                    src="https://media.istockphoto.com/id/876177980/vector/university-vector.jpg?s=2048x2048&w=is&k=20&c=P74kJA80i12oez5l6YcunRlZg_MNYqO3XGIErmLJMP0="
                  />
                  <div className="uni-info">
                    <h3>{info.schoolName}</h3>
                    <p style={{ color: "#282828" }}>{info.degree}</p>
                    <p>{info.description}</p>
                    <span>
                      {new Date(info.startDate).toLocaleDateString("en-US", {
                        month: "2-digit",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {new Date(info.endDate).toLocaleDateString("en-US", {
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="user-education">
              <h4>Experience</h4>
              <Divider />
              {userInfo?.workExperience?.map((info, i) => (
                <div key={i} className="edu-details">
                  <div className="uni-info">
                    <h3>{info.companyName}</h3>
                    <p style={{ color: "#282828" }}>{info.designation}</p>
                    <span>
                      {new Date(info.startDate).toLocaleDateString("en-US", {
                        month: "2-digit",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {new Date(info.endDate).toLocaleDateString("en-US", {
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                    <p style={{ fontSize: "1rem" }}>{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="user-skills">
              <h4>Skills</h4>
              <Divider />
              <div className="skills-section">
                {userInfo?.skills?.map((skill, i) => (
                  <p key={i}>{skill}</p>
                ))}
              </div>
            </div>
          </section>
        )}
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

export default UserProfiles;
