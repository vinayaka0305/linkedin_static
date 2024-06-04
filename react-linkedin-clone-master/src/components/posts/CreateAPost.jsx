import React, { useState } from "react";
import ProfilePicture from "../Account/ProfilePicture";
import styles from "../../styles/posts/CreateAPost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { getProjectID } from "../../utils/authentication/getProjectID";

const CreateAPost = ({ setShowCreatePost }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = JSON.parse(localStorage.getItem("jwtToken"));

  const [newPostInfo, setNewPostInfo] = useState({
    title: "",
    content: "",
    images: null,
  });

  const createPostApiCall = () => {
    const formData = new FormData();

    formData.append("title", newPostInfo.title);
    formData.append("content", newPostInfo.content);
    formData.append("images", newPostInfo.images);

    console.log(formData);

    axios
      .post(
        "https://academics.newtonschool.co/api/v1/linkedin/post/",

        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: `${getProjectID()}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => alert(err.response.data.message));
  };

  const handleSubmit = (e) => {
    createPostApiCall();
  };
  return (
    <div className={styles.container}>
      <div>
        <header>
          <ProfilePicture />
          <h3>{userInfo && userInfo.name}</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setShowCreatePost(false)}
          />
        </header>
        <form
          onSubmit={handleSubmit}
        >
          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              value={newPostInfo["title"]}
              onChange={(e) =>
                setNewPostInfo({ ...newPostInfo, title: e.target.value })
              }
              required
            />
          </label>
          <textarea
            id="content"
            cols="30"
            rows="10"
            placeholder="What do you want to talk about?"
            onChange={(e) =>
              setNewPostInfo({ ...newPostInfo, content: e.target.value })
            }
            value={newPostInfo["content"]}
            required
          ></textarea>
          <label htmlFor="images">
            <FontAwesomeIcon icon={faImage} />
            <input
              type="file"
              id="images"
              onChange={(e) =>
                setNewPostInfo({ ...newPostInfo, images: e.target.files[0] })
              }
              
              required
            />
          </label>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAPost;
