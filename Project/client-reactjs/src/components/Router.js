import React from "react";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Lander from "./Lander";
import Footer from "./Footer";
import About from "./About";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Lander" element={<Lander/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Router;
