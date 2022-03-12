import React from "react";
import CreateProfile from "../CreateProfile";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
