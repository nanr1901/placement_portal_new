import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import logo from "./Components/NITT Logo - White 1.png"

const NavBar=()=>{
return(
  <div className="navbar">
  <div className="navbar-left">
  <div className="logo">
    <img className="logo-img" src={logo} alt="logo"/>
  </div>
  <div className="title-text">NITT Placement Portal</div>
  </div>
   <ul>
  <li>
  <Link to="/">Home </Link>
  </li>
  <li> <Link to="/Academics">Academics </Link></li>
  <li> <Link to="/PastRecruiters"> Past recruiters  </Link></li>
  <li> <Link to="/ContactUs">Contact us </Link></li>
</ul>
    </div>
  
);
};
export default NavBar;
