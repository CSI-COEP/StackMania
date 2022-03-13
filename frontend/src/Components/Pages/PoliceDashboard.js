import React from 'react'

const PoliceDashboard = () => {
  return (
    <div className='generate-case-div'>
        <h2>Generate Case Instructions : </h2>
        <li>Fill all the required details in Case form provided with official letterhead of police station</li>
        <li>File should be uploaded in ".pdf",".doc" format</li>
        <li>Upload it Below</li>
        <input className='fileinput' type="file" placeholder='Upload Filled Form Here...'></input>
    </div>
  )
}

export default PoliceDashboard