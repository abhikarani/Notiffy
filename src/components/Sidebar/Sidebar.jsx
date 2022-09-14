import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <RssFeedIcon className='sidebarIcon'/>
                    <span className='sidebarListItemText'>
                    Feed
                    </span>
                </li>

                <li className='sidebarListItem'>
                    <ChatIcon className='sidebarIcon'/>
                    <span className='sidebarListItemText'>
                      Chats
                    </span>
                </li>

                <li className='sidebarListItem'>
                    <OndemandVideoIcon className='sidebarIcon'/>
                    <span className='sidebarListItemText'>
                      Videos
                    </span>
                </li>

                <li className='sidebarListItem'>
                    <GroupsIcon className='sidebarIcon'/>
                    <span className='sidebarListItemText'>
                      Groups
                    </span>
                </li>

                <li className='sidebarListItem'>
                    <BookmarksIcon className='sidebarIcon'/>
                    <span className='sidebarListItemText'>
                      Bookmarks
                    </span>
                </li>
            </ul>

            <button className='sidebarButton'>Show more</button>
            <hr className='sidebarHr'/>
            <ul className='sidebarFriendList'>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={"/assets/cow.png"} alt=""/>
                    <span className='sidebarFriendName'>Friend 1</span>
                </li>

                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={"/assets/cow.png"} alt=""/>
                    <span className='sidebarFriendName'>Friend 2</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={"/assets/cow.png"} alt=""/>
                    <span className='sidebarFriendName'>Friend 3</span>
                </li>

                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={"/assets/cow.png"} alt=""/>
                    <span className='sidebarFriendName'>Friend 4</span>
                </li>

                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={"/assets/cow.png"} alt=""/>
                    <span className='sidebarFriendName'>Friend 5</span>
                </li>

                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={"/assets/cow.png"} alt=""/>
                    <span className='sidebarFriendName'>Friend 6</span>
                </li>

                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={"/assets/cow.png"} alt=""/>
                    <span className='sidebarFriendName'>Friend 7</span>
                </li>

                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={"/assets/cow.png"} alt=""/>
                    <span className='sidebarFriendName'>Friend 8</span>
                </li>

                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src={"/assets/cow.png"} alt=""/>
                    <span className='sidebarFriendName'>Friend 9</span>
                </li>                
            </ul>
        </div>
    </div>
  )
}
