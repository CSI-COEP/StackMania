import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
  
    <div className='big-signup-div'>
    
        <div className='signup-card'>
        <box-icon name='user-circle' type='filled' color='#0471d3' ></box-icon>
            <p className='signup-header'>Login</p>
            
            <input type="text" placeholder="Email" required></input>
            
            <input type="password" placeholder="Password" required></input>
            <button type="submit" className='signup-btn'>LOGIN</button>

            <Link to="/adminlogin" className='admin-login-text'>↗️Admin Login</Link>
            
        </div>
        
    </div>
    </>
  )
}

export default Login