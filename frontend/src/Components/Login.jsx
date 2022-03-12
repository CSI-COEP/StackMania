import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
  
    <div className='big-signup-div'>
        <div className='signup-card'>
            <p className='signup-header'>Login</p>
            
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button className='signup-btn'>LOGIN</button>

            <Link to="/adminlogin" className='admin-login-text'>↗️Admin Login</Link>
        </div>
    </div>
    </>
  )
}

export default Login