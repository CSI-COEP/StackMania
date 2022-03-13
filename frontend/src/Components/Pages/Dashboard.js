import React from "react";
import { useNavigate } from "react-router-dom"
import CreateProfile from "../CreateProfile";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { getAuth } from "firebase/auth";
import axios from "axios"

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then()
    Aos.init({ duration: 2000 });
  }, []);

  const fetchData = async () => {
    try {
      const token = await getAuth().currentUser.getIdToken();

      const res = await axios.request({
        method: "GET",
        url: "/user",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res.data.role.toUpperCase() !== "MAIN_ADMIN") {
        navigate("/adminlogin")
        return
      }

      const { data } = await axios.request({
        method: "GET",
        url: "/admin/data",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(data);
    } catch (error) {
      navigate("/adminlogin");
      return;
    }
  };

  return (
    <div className="big-dashboard-div">
      <div className="dashboard-div">
        <div className="card-all">
          <div className="card" data-aos="flip-up">
            <h1>{(data && data.openData && data.openData.length) ? data.openData.length : "0"}</h1>
            <p>Cases Ongoing</p>
          </div>
        </div>

        <div className="card-all" data-aos="flip-up">
          <div className="card-purple">
            <h1>{(data && data.allData && data.allData.length) ? data.allData.length : "0"}</h1>
            <p>Cases Listed</p>
          </div>
        </div>

        <div className="card-all" data-aos="flip-up">
          <div className="card-green">
            <h1>{(data && data.closedData && data.closedData.length) ? data.closedData.length : "0"}</h1>
            <p>Cases Closed</p>
          </div>
        </div>
      </div>
      <CreateProfile />
    </div>
  );
};

export default Dashboard;
