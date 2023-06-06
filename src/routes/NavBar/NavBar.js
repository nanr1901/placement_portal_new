import React from "react";
import "./NavBar.css";
import logo from "./Components/NITT Logo - White 1.png"
//import Academics from "./Academics";
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
  <li><a href="/">Home</a></li>
  <li><a href="/">Academics</a></li>
  <li><a href="/">Past recruiters</a></li>
  <li><a href="/">Contact us</a></li>
</ul>
    </div>
  
);
};
export default NavBar;
