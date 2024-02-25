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
import ViewMemberPage from './ViewMemberPage';
import AddFamilyMemberForm from './FamilyPolicy';
import Payment from './Payment';
import IndividualPolicy from "./IndividualPolicy";

import DashBoard from "./AdminDashBoard/DashBoard";
import AddPolicyForm from "./AdminDashBoard/AddPolicyForm";
import ViewPolicyToAdmin from "./AdminDashBoard/ViewPolicyToAdmin";
import SideBar from "./AdminDashBoard/SideBar";

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
          <Route path="/IndividualPolicy" element={<IndividualPolicy />} />
          <Route path="/ViewMemberPage" element={<ViewMemberPage />} />
          <Route path="/FamilyPolicy" element={<AddFamilyMemberForm/>} />
          <Route path="/Payment" element={<Payment />} />
       
        //-----------Admin DashBoard-----------------------------
        
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/AdminDashBoard/AddPolicyForm" element={<AddPolicyForm />} />
          <Route path="/AdminDashBoard/SideBar" element={<SideBar />} />
          <Route path="/AdminDashBoard/ViewPolicyToAdmin" element={<ViewPolicyToAdmin/>} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Router;


