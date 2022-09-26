import React from 'react'

export default function friends({user}) {
    console.log(user)
  return (
    <div className = 'onlineFriends'>
        <img src= {user?.profilePicture} className = 'friendProfileImage' alt=''></img>
        <span className='friendUsername'>{user?.username}</span>
</div>

  )
}
