import React from 'react'


const Signup = () => {
  return (
      <>
    <div className='big-signup-div'>
        <div className='signup-card'>
            <p className='signup-header'>Sign Up</p>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Create Password"></input>
            <button className='signup-btn'>SIGN UP</button>
        </div>
    </div>
    </>
  )
}

export default Signup