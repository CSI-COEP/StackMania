import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Login = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="big-signup-div">
        <div className="signup-card" data-aos="fade-down">
          <box-icon name="user-circle" type="filled" color="#0471d3"></box-icon>
          <p className="signup-header">Login</p>

          <input type="text" placeholder="Email" required></input>

          <input type="password" placeholder="Password" required></input>
          <button type="submit" className="signup-btn">
            LOGIN
          </button>

          <Link to="/adminlogin" className="admin-login-text">
            ↗️Admin Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
