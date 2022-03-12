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
      <div className="header-div">
        <img src="/Images/DigiCourt.png" className="logo" alt="logo"></img>
        <p className="header">DigiCourt</p>
      </div>
      <div className="menu-div">
        <Link to="/">
          <li>HOME</li>
        </Link>
        {loggedIn ? (
          <div onClick={onLogoutClick}>
            <li>LOGOUT</li>
          </div>
        ) : (
          <Link to="/login">
            <li>LOGIN</li>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
