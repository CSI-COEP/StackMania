import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const onLogoutClick = async () => {
    await getAuth().signOut();
    setLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      }
    });
  }, []);

  return (

    <div className="navbar-div">
      <div className="Header-div">
        <img src="/Images/DigiCourt.png" className="logo" alt="logo"></img>
        <p className="Header">DigiCourt</p>
      </div>
      <div className="menu-div">
        <Link to="/">
          <li className="item">HOME</li>
        </Link>
        {loggedIn ? (
          <div onClick={onLogoutClick}>
            <li className="item">LOGOUT</li>
          </div>
        ) : (
          <Link to="/login">
            <li className="item">LOGIN</li>
          </Link>
        )}
      </div>
      <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
    </div>

  );
};

export default Navbar;
