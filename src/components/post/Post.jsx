import { GroupAddOutlined, HeartBroken, MoreVert, ThumbUp } from '@mui/icons-material'
import React from 'react'
import "./post.css"
export default function Post() {
  return (
    <div className='post'>
       <div className = 'postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src='/assets/narutojiraiya .jpg' className = 'postProfileImage' alt=''></img>
                    <span className='postUsername'>Abhi Karani</span>
                    <span className='postDate'>5 mins ago</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert />
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>Hey! this is my first post </span>
                <img src='/assets/car.jpeg' className = 'postImg' alt=''></img>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <ThumbUp className='likeIcon'/>
                    <HeartBroken className='likeIcon' />
                    <span className='postLikeCounter'>32 people liked this post</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postCommentText'>9 comments</span>
                </div>
            </div>
       </div>
    </div>
  )
}
