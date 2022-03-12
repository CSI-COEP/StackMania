import './App.css';
import Home from './Components/Pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Adminlogin from './Components/Adminlogin';
import Dashboard from './Components/Pages/Dashboard';

function App() {

  
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
     
     <Route path='/' element={<Home/>}></Route>
   
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/adminlogin' element={<Adminlogin/>}></Route>
     <Route path='adminlogin/dashboard' element={<Dashboard/>}></Route>
   
     
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
