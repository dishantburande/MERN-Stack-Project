import React from 'react'
import './ProfileLeft.css'
import LogoSearch from '../LogoSearch/LogoSearch.jsx'
import InfoCard from '../InfoCard/InfoCard.jsx'
import FollowersCard from '../FollowersCard/FollowersCard.jsx'
const ProfileLeft = () => {
  return (
    <div className="ProfielLeft">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft