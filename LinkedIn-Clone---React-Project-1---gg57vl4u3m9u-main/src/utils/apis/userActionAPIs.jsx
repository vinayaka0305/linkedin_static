import axios from "axios";
import { headerWithJWT } from "./getHeader";

export const upVotePostApi = async (postID) => {
  const headers = headerWithJWT();

  try {
    const res = await axios.post(
      `https://academics.newtonschool.co/api/v1/linkedin/like/${postID}`,
      {},
      headers
    );

    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const composeNewpost = async (newPost)=>{
  const headers = headerWithJWT();
  try {
    console.log('header', headers);
    console.log('body', newPost);
    const res = await axios.post('https://academics.newtonschool.co/api/v1/linkedin/post/',
    newPost,
    headers
    )
    return res.data
  } catch (error) {
    return error.message
  }
  
}

export const followAUser = async(id)=>{
  const headers = headerWithJWT();

  try {
    const res = await axios.post(`https://academics.newtonschool.co/api/v1/linkedin/follow/${id}`,{},headers)
    return res.data
  } catch (error) {
    return error.response.data
  }
}
export const unfollowAUser = async(id)=>{
  const headers = headerWithJWT();

  try {
    const res = await axios.delete(`https://academics.newtonschool.co/api/v1/linkedin/follow/${id}`,headers)
    return res.data
  } catch (error) {
    return error.response.data
  }
}
