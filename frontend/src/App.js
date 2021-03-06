import "./App.css";
import Home from "./Components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Adminlogin from "./Components/Adminlogin";
import Dashboard from "./Components/Pages/Dashboard";
import Footer from "./Components/Footer";
import Policelogin from "./Components/Policelogin";
import PoliceDashboard from "./Components/Pages/PoliceDashboard";
import Profile from "./Components/Pages/Profile";


const firebaseConfig = {
  apiKey: "AIzaSyAO-kgOwStk6cpclFC9WsctI2p26xqpYlw",
  authDomain: "digi-court.firebaseapp.com",
  projectId: "digi-court",
  storageBucket: "digi-court.appspot.com",
  messagingSenderId: "628892067154",
  appId: "1:628892067154:web:13190b7ba40d2145af868b",
  measurementId: "G-0GMH3EJCPL",
};

initializeApp(firebaseConfig);
getAnalytics();

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/adminlogin" element={<Adminlogin />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/policelogin" element={<Policelogin />}></Route>
          <Route path="/policedash" element={<PoliceDashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
