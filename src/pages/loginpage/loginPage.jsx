import { Password } from '@mui/icons-material'
import React from 'react'
import './loginpage.css'

export default function LoginPage() {
  return (
    <div className='loginPage'>
    <div className='loginpageText'>Welcome</div>
    <div className='loginpageSignIn'>
            <input className='loginpageUserNameInput' placeholder='Username'></input>
            <input className='loginpagePasswordInput' placeholder='password'></input>
    </div>
    </div>
  )
}
