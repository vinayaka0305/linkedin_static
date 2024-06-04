import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/home/NewPost.module.css";
import ProfilePicture from "../Account/ProfilePicture";
import { useContext, useState } from "react";
import { AuthContext } from "../../App";
import { getNewPostOptions } from "../../utils/home/getNewPostOptions";
import CreateAPost from "../posts/CreateAPost";
import { ToastContainer, toast } from "react-toastify";

export const Newpost = () => {
  const { darkTheme } = useContext(AuthContext);
  const newPostOptions = getNewPostOptions();
  const mouseOver = (e) =>
    (e.target.style.backgroundColor = darkTheme ? "#575c60" : "#ddd");
  const moustOut = (e) => (e.target.style.backgroundColor = "transparent");

  const [showCreatePost,setShowCreatePost] = useState(false);

  

  const notify = () => toast.info("Under Construction!",{autoClose:3000})

  return (
    <div
      className={styles.newPost}
      style={{ backgroundColor: darkTheme ? "#1b1f23" : "#fff" }}
    >
      <div className={styles.newPostInput}>
        <ProfilePicture />
        <input
          type="text"
          name="newpost"
          id="newpost"
          placeholder="Start a post"
          style={{
            border: `1px solid ${darkTheme ? "#ffffff80" : "#00000080"}`,
          }}
          onMouseOver={mouseOver}
          onMouseOut={moustOut}
          onClick={()=>setShowCreatePost(true)}
        />
      </div>
      {showCreatePost&&<CreateAPost setShowCreatePost={setShowCreatePost}/>}
      <div className={styles.newPostOptions}>
        {newPostOptions.map(({ icon, flip, color, text }, i) => {
          return (
            <div
              key={i}
              style={{ color: darkTheme ? "#ffffff99" : "#00000099" }}
              onMouseOver={mouseOver}
              onMouseOut={moustOut}
              onClick={notify}
            >
              <FontAwesomeIcon
                icon={icon}
                flip={flip}
                style={{ color: color, fontSize: "1.25rem" }}
              />
              {text}
            </div>
          );
        })}
      </div>
      <ToastContainer/>
    </div>
  );
};
