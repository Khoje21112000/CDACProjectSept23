import React from 'react'
import "./SideBar.css"
// import { useDispatch } from 'react-redux';
// import { logout } from "../../Reduser/AuthSlice";
// import 'boxicons'
// import { logoutUser } from "../../Services/OrgService/LogoutSevice"
// import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
// import { Navigate } from 'react-router-dom';

// import { useState, useEffect } from 'react';
// import { getOrganisation } from "../../Services/OrgService/GetService";




function SideBar() {
  return (

    <div id="parentdiv">

<section id="sidebar">
{

	<div className ="centered-div">
  <a href="#" className="brand">
    
    <span className="text">Health-Care</span>
  </a>
  
  </div>

}
   
		<ul className="side-menu top">
			<li >
				<a href="/DashBoard">
        <box-icon name='DashBoard' type='solid' ></box-icon>
					<span className="text">DashBoard</span>
				</a>
			</li>
			<li>
				<a href="#">
        <box-icon name='leaf' type='solid' ></box-icon>
					<span className="text">Policy Holders</span>
				</a>
			</li>
            <li>
				<a href="/ViewPolicyToAdmin">
        <box-icon type='solid' name='cart-add'></box-icon>
					<span className="text">Policy</span>
				</a>
			</li>
          
      <li>
				<a href="/AddPolicyForm">
        <box-icon type='solid' name='cart-add'></box-icon>
					<span className="text">Add policy</span>
				</a>
			</li>
      <li>
	           
				
        <box-icon name='arrow-back' ></box-icon>
		<Button className="logout" onClick={null}>
			   <span className="text">Logout</span>
			   </Button>			
				
			</li>
		</ul>
	</section>
    </div>
  )

}

export default SideBar