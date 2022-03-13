import React from "react";
import { useNavigate } from "react-router-dom"
import CreateProfile from "../CreateProfile";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { getAuth } from "firebase/auth";
import axios from "axios"

const Dashboard = () => {
  const navigate = useNavigate();

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
            <h1>98</h1>
            <p>Cases Pending</p>
          </div>
        </div>

        <div className="card-all" data-aos="flip-up">
          <div className="card-purple">
            <h1>3265</h1>
            <p>Cases Listed</p>
          </div>
        </div>

        <div className="card-all" data-aos="flip-up">
          <div className="card-green">
            <h1>235</h1>
            <p>Disposed Cases</p>
          </div>
        </div>
      </div>
      <CreateProfile />
    </div>
  );
};

export default Dashboard;
