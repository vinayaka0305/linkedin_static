import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as SolidLikeBtn } from "../../assets/likeButton/SolidLikeBtn.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/home/PostCard.module.css";
import { AuthContext } from "../../App";
import { getReactionButtons } from "../../utils/home/getReactionButtons";
import { ToastContainer, toast } from "react-toastify";
import defaultProfile from '../../assets/defaultPost/defaultProfile.png'

export const Post = (props) => {
  const { darkTheme } = useContext(AuthContext);
  const reactionButtons = getReactionButtons();

  const notify = () => toast.info("Under Construction!",{autoClose:3000});

  const {
    _id,
    author: { _id:userId,name, profileImage },
    title:profession,images,
    commentCount,
    likeCount,
    content,
  } = props;
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className={styles.postCard}
      style={{ backgroundColor: darkTheme ? "#1b1f23" : "#fff" ,borderBottom:`1px solid ${darkTheme?"#ffffff50":"#00000050"}`}}
    >
      <div className={styles.profileDetails}>
        <div>
          <img src={profileImage==null?defaultProfile:profileImage} alt="profile-image" />
          <div>
            <Link
              to={`/home/id/${userId}`}
              style={{ color: darkTheme ? "#ddd" : "#333" }}
            >
              {name}
            </Link>
            <p style={{ color: darkTheme ? "#ffffff99" : "#000000" }}>
              {profession}  
            </p>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faEllipsis}
          style={{ color: darkTheme ? "#ddd" : "#333" }}
          onClick={notify}
        />
      </div>

      <p style={{ color: darkTheme ? "#ffffff99" : "#000000" }}>{content}</p>
      <img src={(images&&images.length!=0)?images[0]:defaultProfile} alt="content-image" />
      <div>
        <div
          className={styles.likesCommentsCount}
          style={{
            color: darkTheme ? "#ffffff99" : "#00000099",
            borderBottom: `1px solid ${darkTheme ? "#ffffff66" : "#00000066"}`,
          }}
        >
          <div>{isLiked ? likeCount + 1 : likeCount} likes</div>
          <div>{commentCount} comments</div>
        </div>
        <div className={styles.reactionButtons}>
          <div onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <SolidLikeBtn className={styles.solidLikeBtn} />
            ) : (
              <FontAwesomeIcon
                icon={faThumbsUp}
                flip="horizontal"
                style={{ color: darkTheme ? "#ffffff99" : "#00000099" }}
              />
            )}
            <span style={{ color: darkTheme ? "#ffffff99" : "#00000099" }}>
              Like
            </span>
          </div>
          {reactionButtons.map(({ icon, text }, i) => {
            return (
              <div style={{ color: darkTheme ? "#ffffff99" : "#00000099" }} onClick={notify} key={i}>
                <FontAwesomeIcon icon={icon}/>
                <span>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
