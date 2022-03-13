import React from 'react'

import { Web3Storage } from 'web3.storage'

const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDREOUU2Mjg3ZEVBRGY5MDQ3ZDAwMGZGOGQ1MzI1OWM0MGM4MzQ3QkIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDcxMzczNzIyNTEsIm5hbWUiOiJEaWdpQ291cnQifQ.ZApsW-5xdLSSWkzlm47TDofglDG8vjZiYzp2TlJhlBo" })

const PoliceDashboard = () => {
  const onFileChange = async (event) => {
    const files = event.target.files;
    if (!files.length) return

    const cid = await client.put(files);
    const info = await client.status(cid);

    console.log(info)

    const res = await client.get(cid);
    const storedFiles = await res.files();
    for (const file of storedFiles) {
      console.log(file);
    }
  }

  return (
    <div className='generate-case-div'>
      <div>
      <h2>Generate Case Instructions : </h2>
      <li>Fill all the required details in case-form official letterhead of police station</li>
      <li>Also fill the form given on the right side</li>
      <li>File should be uploaded in ".pdf",".doc" format</li>
      <li>Upload it Below</li>
      <input onChange={onFileChange} className='fileinput' type="file" placeholder='Upload Filled Form Here...'></input>
      </div>

      <div className='case-form'>
        <h3>Case Form</h3>
        <input type="text" placeholder="Enter User mailID"></input>
        <input type="text" placeholder="Enter Lawyer mailID"></input>
        <input type="text" placeholder="Booked Under Section"></input>
        <button className="signup-btn">
           SUBMIT
          </button>
      </div>
    </div>
  )
}

export default PoliceDashboard