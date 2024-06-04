const projectID = "gg57vl4u3m9u";



export const authHeader = () => {
  const authToken = sessionStorage.getItem("authToken");
  return {
    headers: {
      "Content-Type": "application/json",
      projectID: projectID,
    },
  };
};
export const headerWithProjectIdOnly = () => {
  const authToken = sessionStorage.getItem("authToken");
  return {
    headers: {
      projectID: projectID,
    },
  };
};

export const headerWithJWT = ()=>{
  // console.log('while fetching', authToken);
  const authToken = sessionStorage.getItem("authToken");
  return {
    headers:{
      Authorization: `Bearer ${authToken}`,
      projectID: projectID,
      'Content-Type': "application/json"
      
    }
  }
}
