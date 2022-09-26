import { GroupAddOutlined, HeartBroken, MoreVert, ThumbUp } from '@mui/icons-material'
import React, { useState } from 'react'
import "./post.css"
import { Users } from '../../dummydata'

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1:like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
       <div className = 'postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src={Users.filter(u=>u.id=== post.userId)[0].profilePicture} className = 'postProfileImage' alt=''></img>
                    <span className='postUsername'>{Users.filter(u=>u.id=== post.userId)[0].username}</span>
                    <span className='postDate'>{post?.date}</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert />
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post?.desc}</span>
                <img src={post?.photo} className = 'postImg' alt=''></img>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <ThumbUp className='likeIcon' onClick = {likeHandler}/>
                    <HeartBroken className='likeIcon' />
                    <span className='postLikeCounter'>{like} people liked this post</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postCommentText'>{post?.comment} comments</span>
                </div>
            </div>
       </div>
    </div>
  )
}
