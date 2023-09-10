import React from "react";
import LogoSearch from '../LogoSearch/LogoSearch.jsx'
import ProfileCard from "../ProfileCard/ProfileCard.jsx";
import FollowersCard from "../FollowersCard/FollowersCard.jsx";
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard location = "homepage"/>
        <FollowersCard/>
    </div>
    )
}

export default ProfileSide