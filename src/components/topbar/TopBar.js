import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function TopBar() {
    return (
        <div className='topBarContainer'>
            <img src={'assets/notiffy.png'} alt='' className="AppLogo" />
            <div className='topBarLeft'>
                <span className='logo'>Notiffy</span>
            </div>

            <div className='topBarCentre'>
                <div className='searchBar'>
                    <SearchIcon className="searchIcon" />
                    <input placeholder='Search a Friend or a post' className="searchInput" />
                </div>
            </div>

            <div className='topBarRight'>
                <div className='topBarLinks'>
                    <span className='topBarLink'>Homepage</span>
                    <span className='topBarLink'>Timeline</span>
                </div>
                <div className='topBarIcons'>
                    <div className='topBarIconItem'>
                        <PersonIcon />
                        <span className='topBarIconBadge'>1</span>
                    </div>

                    <div className='topBarIconItem'>
                        <ChatIcon />
                        <span className='topBarIconBadge'>2</span>
                    </div>

                    <div className='topBarIconItem'>
                        <NotificationsIcon />
                        <span className='topBarIconBadge'>1</span>
                    </div>
                </div>

                <img src={'/assets/narutojiraiya .jpg'} alt='' className='topBarImage' />
            </div>
        </div>
    )
}
