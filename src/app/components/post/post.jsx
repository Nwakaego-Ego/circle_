import React from "react";
import Image from "next/image";

const Post = () => {

 
const followers_post = [
  {
    bg_profile_image: "/ego.png",
    profile_name: "Nwakaego",
  },
  {
    bg_profile_image: "/meeee.jpeg",
    profile_name: "Ego",
  },
  {
    bg_profile_image: "/pretti.png",
    profile_name: "Glory",
  },
  {
    bg_profile_image: "pretty.jpg",
    profile_name: "Kaego",
  },
  {
    bg_profile_image: "white-dress.jpg",
    profile_name: "Omojuowolo",
  },
];
  
  return (
    <>
      <div>
        <Image src="/ego.png" alt="ego-image" width={50} height={50} />
      </div>
    </>
  );
};

export default Post;
