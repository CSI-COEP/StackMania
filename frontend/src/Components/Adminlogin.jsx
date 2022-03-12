import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const Adminlogin = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="big-signup-div">
        <div className="signup-card" data-aos="fade-down">
          <box-icon name="user-circle" type="filled" color="#0471d3"></box-icon>
          <p className="signup-header">Admin Login</p>

          <input type="text" placeholder="Court Region"></input>
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <Link to="dashboard">
            <button className="signup-btn">LOGIN</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
