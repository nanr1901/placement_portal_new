import React from "react";
import "./PastRecruiters.css";
import logo from "./company-logo.png"
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const PastRecruiters=()=>{
    return(
        <>
        <NavBar/>
             <div class="row">
        <div class="col-sm-3">

          <div class="card">
              <img class="card img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Company XYZ.</h5>

            </div>
          </div>
        </div>
        <div class="col-sm-3">

          <div class="card">
              <img class="card img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Company XYZ.</h5>

            </div>
          </div>
        </div>
        <div class="col-sm-3">

          <div class="card">
              <img class="card img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Company XYZ.</h5>

            </div>
          </div>
        </div>
    
        </div>
<Footer/>

        </>

    );
}

export default PastRecruiters;