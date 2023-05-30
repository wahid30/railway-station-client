import React, { useEffect, useState } from "react";
import LatestPostCards from "./LatestPostCards";

const LatestPost = () => {
  const [post,setPost] = useState([]);
  useEffect(()=>{
    fetch("myJsonFile/latesPost.json")
    .then(res=>res.json())
    .then(data=>setPost(data))
  },[])
  return (
    <div className="w-9/12 mx-auto my-5">
      <h1 className="text-2xl text-center font-bold my-5">Latest Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
  {
    post.map(pst=> <LatestPostCards pst={pst}></LatestPostCards>)
  }
      </div>
    </div>
  )
};

export default LatestPost;