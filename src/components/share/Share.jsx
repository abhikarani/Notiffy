import { PermMedia, ThumbsUpDown } from '@mui/icons-material'
import { Icon } from '@mui/material'
import React from 'react'
import "./share.css"

export default function Share() {
  return (
    <div className='share'>
        <div className='shareWraper'>
            <div className='shareTop'>
                <img className = "shareProfileImage "src='/assets/narutojiraiya .jpg' alt=''/>
                <input placeholder = "What's on your mind" className='shareInput' />
            </div>
            <hr className='shareHr'/>
            
            <div className='shareBottom'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <PermMedia className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>            
                    </div>
                    <div className='shareOption'>
                        <ThumbsUpDown className='shareIcon'/>
                        <span className='shareOptionText'>Like</span>            
                    </div>
                    <div className='shareOption'>
                        <PermMedia className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>            
                    </div>
                    <div className='shareOption'>
                        <PermMedia className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>            
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
