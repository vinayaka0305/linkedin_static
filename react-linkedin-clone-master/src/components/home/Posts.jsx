import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "./Post";
import { Loader } from "../loader/Loader";
import { getProjectID } from "../../utils/authentication/getProjectID";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoadingState(true);
      const posts = await axios.get(
        "https://academics.newtonschool.co/api/v1/linkedin/post",
        { headers: { projectId: `${getProjectID()}` } }
      );
      console.log(posts.data.data);
      setPosts(posts.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingState(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      {!loadingState ? (
        posts.map((data, i) => {
          return <Post key={i} {...data} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};
