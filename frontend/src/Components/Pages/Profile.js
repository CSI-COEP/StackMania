import React from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import axios from "axios"

const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData().then()
  }, []);

  const fetchData = async () => {
    try {
      const currentUser = getAuth().currentUser;
      if (!currentUser) {
        navigate("/login");
        return
      }
      const token = await currentUser.getIdToken();

      const { data } = await axios.request({
        method: "GET",
        url: "/user/cases",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(data.databaseData || []);
    } catch (error) {
      console.log(error)
      navigate("/login");
      return;
    }
  };
  return (
    <>
      <div className='Big-Profile'>
        <h3 style={{ marginTop: 10, textAlign: "center", fontFamily: "Inter , sans-serif" }}>Username : kldsfjjklfakjl</h3>
        {data.length <= 0 ? (
          <h3 style={{ marginTop: 10, textAlign: "center", fontFamily: "Inter , sans-serif" }}>No cases</h3>
        ) : (
          <div className='profile-div'>
            <div className='card-purple'>Case ID : {data[0]._id}</div>
            <div className='card-green'>Status : {data[0].open ? "Ongoing" : "Closed"}</div>
            <div className='card'>Hearing : 13/03/2022</div>
          </div>
        )
        }
      </div >
    </>
  )
}

export default Profile