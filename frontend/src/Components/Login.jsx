import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1500 });
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);

  const onSignInClicked = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), username, password);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="big-signup-div">
        <div className="signup-card" data-aos="fade-down">
          <box-icon name="user-circle" type="filled" color="#0471d3"></box-icon>
          <p className="signup-header">User Login</p>

          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Email"
            required
          ></input>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          ></input>

          <Link to="/profile">
            {" "}
            <button onClick={onSignInClicked} className="signup-btn">
              LOGIN
            </button>
          </Link>
          <div className="policeadmin">
            <Link to="/adminlogin" className="admin-login-text">
              ↗️Admin Login
            </Link>
            <Link to="/policelogin" className="admin-login-text">
              ↗️Police Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
