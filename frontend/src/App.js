import './App.css';
import Home from './Components/Pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Adminlogin from './Components/Adminlogin';

function App() {

  const OptionHandler = (option) => {
  
    setOptions([...options, {id:Math.random() * 1000, ...option}])
    
  }
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
     
     <Route path='/' element={<Home/>}></Route>
     <Route path='/signup' element={<Signup/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/adminlogin' element={<Adminlogin/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
