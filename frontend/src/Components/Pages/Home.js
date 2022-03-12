import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  })
  return (
    <>
      <div className="big-home-div" data-aos="fade-right">
        <div className="left-home">
          <img
            src="./Images/justicelogo.png"
            className="justicelogo"
            alt="justice"
            data-aos="fade-left"
          ></img>
          <div className="welcome-note" data-aos="fade-left">Welcome to DigiCourt!</div>

          <div></div>
        </div>
        </div>
    </>
  );
};

export default Home;
