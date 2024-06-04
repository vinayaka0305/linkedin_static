import { Avatar, Divider, Snackbar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import React, { useState } from "react";
import SingleComments from "./SingleComments";
import UnavailableDialog from "../../../Errors/UnavailableDialog";
import { Link } from "react-router-dom";

const FeedPost = ({ feedPost, setFeedPosts, setShowLoginDialog }) => {
  const userName = sessionStorage.getItem("userName");
  const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));

  const [showComments, setShowComments] = useState();

  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const [likedPosts, setLikedPosts] = useState({});
  const [postComments, setPostComments] = useState([
    {
      name: "Paul David",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      name: "Jon Alex",
      comment:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.",
    },
    {
      name: "Brian David",
      comment:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    {
      name: "Moosa Alexender",
      comment:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    },
  ]);
  const [userCommentinput, setUserCommentInput] = useState({
    name: "",
    comment: "",
  });
  

  const handleUpVote = async (postID) => {
    if (isLoggedIn) {
      if (!likedPosts[postID]) {
        setFeedPosts((prevFeedPosts) =>
          prevFeedPosts.map((post) =>
            post._id === postID
              ? { ...post, likeCount: post.likeCount + 1 }
              : post
          )
        );
        setLikedPosts((prevState) => {
          return { ...prevState, [postID]: true };
        });
      } else {
        setFeedPosts((prevFeedPosts) =>
          prevFeedPosts.map((post) =>
            post._id === postID
              ? { ...post, likeCount: post.likeCount - 1 }
              : post
          )
        );
        setLikedPosts((prevState) => {
          const newState = { ...prevState };
          delete newState[postID]; // Remove the post from likedPosts
          return newState;
        });
      }
    } else {
      setShowLoginDialog(true);
    }
  };

  const saveUserComment = (e) => {
    const { value } = e.target;
    setUserCommentInput({
      name: userName,
      comment: value,
    });
  };

  const handleNewComment = (postID) => {
    if (userCommentinput.comment) {
      setPostComments((prevState) => [userCommentinput, ...prevState]);
    }
    setUserCommentInput({
      name: "",
      comment: "",
    });
  };

  const handleShowComment = () => {
    if (isLoggedIn) {
      if (showComments) {
        setShowComments(false);
      } else {
        setShowComments(true);
      }
    } else {
      setShowLoginDialog(true);
    }
  };

  const handleShare = () => {
    if (isLoggedIn) {
      setShowErrorDialog(true);
    } else {
      setShowLoginDialog(true);
    }
  };

  return (
    <div className="feedpost-grid-container">
      <section className="post-header">
        <div className="header-left">
          <Link to={`/profile/${feedPost.author._id}`} className="profile-picture">
            {feedPost.author.profileImage ? (
              <Avatar src={feedPost.author.profileImage} />
            ) : (
              <Avatar />
            )}
          </Link>
          <div className="about-user">
            <h4><Link to={`/profile/${feedPost.author._id}`}>{feedPost.author.name}</Link></h4>
            <p>{feedPost?.channel?.name || "Software Devloper"}</p>
          </div>
        </div>
        <div className="header-right">
          <MoreHorizIcon />
        </div>
      </section>
      <section className="post-content">{feedPost.content}</section>
      <section className="post-image">
        <img src={feedPost?.channel?.image} alt="" />
      </section>

      <section id={feedPost._id || ""} className="post-feature">
        <button
          onClick={() => handleUpVote(feedPost._id)}
          className="post-like"
        >
          <span style={{ transform: "scaleX(-1)", marginRight:'5px' }}>
            {likedPosts[feedPost._id]?<ThumbUpAltIcon/>:<ThumbUpOffAltIcon />}
            
          </span>{" "}
          <span>Like</span>{" "}
          {feedPost.likeCount !== 0 && (
            <span style={{ marginLeft: "0.5rem", fontWeight: "bold" }}>
              {feedPost.likeCount}
            </span>
          )}
        </button>
        <button onClick={handleShowComment} className="post-comment">
          <ChatBubbleOutlineIcon />
          <span>Comment</span>
        </button>
        <button onClick={handleShare} className="post-share">
          <SendIcon />
          <span>Share</span>
        </button>
      </section>
      {showComments && (
        <section className="post-comments-section">
          <div className="compose-comment">
            <Avatar />
            <input
              type="text"
              value={userCommentinput.comment}
              onChange={saveUserComment}
            />
            <button onClick={handleNewComment}>
              <SendIcon />
            </button>
          </div>
          {postComments.map((comment, index) => {
            return (
              <SingleComments
                key={index}
                comment={comment}
                setShowErrorDialog={setShowErrorDialog}
              />
            );
          })}

          {/* <div className="post-comment">
          <Avatar/>
            <div className="post-comment-content">
              <h4>Paul Janson</h4>
              <p>This is a sample comment</p>
            </div>
        </div> */}
        </section>
      )}

      <UnavailableDialog open={showErrorDialog} setOpen={setShowErrorDialog} />
    </div>
  );
};

export default FeedPost;
