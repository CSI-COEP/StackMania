import React from 'react'
import CreateProfile from '../CreateProfile'

const Dashboard = () => {
  return (
    <div className='big-dashboard-div'>
    <div className='dashboard-div'>
        <div className='card-all'>
          <div className='card'>
              <h1>98</h1>
              <p>Cases Pending</p>
          </div>
          </div>

          <div className='card-all'>
          <div className='card-purple'>
              <h1>3265</h1>
              <p>Cases Listed</p>
          </div>
          </div>

          <div className='card-all'>
          <div className='card-green'>
              <h1>235</h1>
              <p>Disposed Cases</p>
          </div>
          </div>
      
    </div>
    <CreateProfile />
         
    </div>
  )
}

export default Dashboard