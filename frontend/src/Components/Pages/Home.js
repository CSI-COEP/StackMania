import React from 'react'
import Select from '../Select'
const Home = () => { 

  

  return (
  <>
    <div className='big-home-div'>
        <div className='left-home'>
            <img src='./Images/justicelogo.png' className="justicelogo" alt='justice'></img>
            <div className='welcome-note'>Welcome to DigiCourt!</div>
            <Select />
            <div>
   
  </div>
        </div>
        <div className='right-home'></div>
           <img src='./Images/law.png' className="home-right-img" alt='law'></img>
        </div>
        </>)
 
}

export default Home