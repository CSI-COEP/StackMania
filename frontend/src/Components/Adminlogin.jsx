import React from 'react'
import { Link } from 'react-router-dom'

const adminlogin = () => {


  
  return (
    <>
    
    <div className='big-signup-div'>
        <div className='signup-card'>
        <box-icon name='user-circle' type='filled' color='#0471d3' ></box-icon>
            <p className='signup-header'>Admin Login</p>
            
            <input type='text' placeholder='Court Region'></input>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
          <Link to="dashboard"><button className='signup-btn'>LOGIN</button></Link>  
        </div>
    </div>
    </>
  )
}

export default adminlogin