import React from 'react'
import "./DashBoard.css"
// import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

function DashBoard() {
	
  return (
    <div className='parent'>
       <ul className='box-info'>
				<li>
					<i className='bx'></i>
					<span className="text">
						<h3>0</h3>
						<p>Policy Holders</p>
					</span>
				</li>
				<li>
					<i className='bx'></i>
					<span className="text">
						<h3>0</h3>
						<p>Total policy</p>
					</span>
				</li>
				
			</ul>
    </div>



  )

}

export default DashBoard