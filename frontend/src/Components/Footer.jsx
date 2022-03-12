import React from 'react'

const Footer = () => {
  return (
    <div className='footer-div'>
        <div className='footer-logo'>
            <img src='./Images/DigiCourt.png' className="logo" alt='logo'></img>
            <h1 className='footer-header'>DigiCourt</h1>
        </div>
        <div className='credit-div'>
            <h3>Project Developed By <span>Piyush Bhangale</span> & <span>Abhishek Dhanke</span></h3>
        </div>
    </div>
  )
}

export default Footer