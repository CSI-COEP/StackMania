import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-div'>
        <div className='header-div'><img src='/Images/DigiCourt.png' className='logo' alt='logo'></img><p className='header'>DigiCourt</p></div>
        <div className='menu-div'>
          <Link to="/"><li>HOME</li></Link>
        <Link to="/login"><li>LOGIN</li></Link>
           
         

            </div>
    </div>

  )
}

export default Navbar