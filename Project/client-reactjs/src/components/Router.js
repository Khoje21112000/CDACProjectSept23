import React from 'react';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import Lander from './Lander';


const Router = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contactus' element={<ContactUs/>} />
      
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Lander' element={<Lander/>}/>
       
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default Router;
