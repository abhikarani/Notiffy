import React from 'react'
import "./onlinefriends.css"

export default function OnlineFriends({user}) {
    console.log(user)
  return (
    <div className = 'onlineFriends'>
          <img src= {user?.profilePicture} className = 'friendProfileImage' alt=''></img>
          <span className='badge'></span>
          <span className='friendUsername'>{user?.username}</span>
    </div>
  )
}
//Users.filter(u=>u.status==="online")[0].profilePicture}