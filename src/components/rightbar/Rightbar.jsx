import React from 'react'
import Maps from '../map/Map'
import "./rightbar.css"
import { Users } from '../../dummydata'
import OnlineFriends from '../onlinefriends/OnlineFriends'
export default function Rightbar() {

    return (
    <>
    <div className='rightbar'>
      <div className ='rightbarText'> find your friends</div>
      <Maps />
      <hr className='onlineFriendsLine' />
      <span className='onlineText'>currently online</span>
       {Users.filter(u=>u.status==="online").map(u=>(
       <OnlineFriends key = {u.id} user = {u}/>
       ))}
    </div>
  </>
  )
}
//Users.filter(u=>u.status==="online").map(u=>(<Users key = {u.id} user = {u}/>))
//.filter(u=>u.status==="online")