import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import TopBar from '../../components/topbar/TopBar'
import "./profile.css"

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/6130303_edited.jpg" alt="" />
              <img className="profileUserImg" src="assets/leaf.jpg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Study Chapter</h4>
                <span className="profileInfoDesc">Hello friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
          </div>
        </div>
      </div>
    </>
  )
}
