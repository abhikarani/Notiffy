import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import TopBar from '../../components/topbar/TopBar'
import "./home.css"

export default function HomePage() {
    return (
        <>
       <TopBar />
        <div className='homeContainer'>
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
      
        </>
    )
}
