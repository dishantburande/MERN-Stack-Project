import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide.jsx";
import PostSide from "../../components/PostSide/PostSide.jsx";
import RightSide from "../../components/RightSide/RightSide.jsx";
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
