import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../../utils/apis/getUserInfo";
import { Avatar, Button, CircularProgress, Divider } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { followAUser, unfollowAUser } from "../../../utils/apis/userActionAPIs";
import { Link } from "react-router-dom";

const PeopleCard = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [followLoading, setFollowLoading] = useState(false);

  const fetchInfo = async () => {
    try {
      setLoading(true);
      const res = await getUserInfo(id);
      if (res.status === "success") {
        // console.log(res.data);
        setUserInfo(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="people-card">
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          <Link to={`/profile/${id}`}>
            <Avatar
              style={{ width: "80px", height: "80px" }}
              src={userInfo?.profileImage}
            />
          </Link>
          <section>
            <h4>
              <Link to={`/profile/${id}`}>{userInfo?.name}</Link>
            </h4>
            <p>{userInfo?.workExperience[0].designation}</p>
            <Button
              variant={userInfo?.isFollowed ? "outlined" : "contained"}
              sx={{
                fontSize: "0.8rem",
                borderRadius: "25px",
                textTransform: "capitalize",
                fontWeight: "500",
                height: "fit-content",
                padding: "2px 10px",
              }}
              onClick={handleFollow}
            >
              {followLoading ? (
                <CircularProgress
                  style={{ width: "1rem", height: "1rem" }}
                  color="inherit"
                />
              ) : !userInfo?.isFollowed ? (
                <>
                  <PersonAddIcon style={{ width: "1rem", height: "1rem" }} />
                  Follow
                </>
              ) : (
                <>
                  <>
                    <DoneIcon style={{ width: "1rem", height: "1rem" }} />
                    Following
                  </>
                </>
              )}
            </Button>
          </section>
        </>
      )}
      
      
    </div>
  );
};

export default PeopleCard;
