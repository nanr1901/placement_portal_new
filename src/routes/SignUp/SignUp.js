import React from "react";
import NavBar from "../NavBar/NavBar";
import "./SignUp.css";

const SignUp =()=>
{
    return(
        <>
        <NavBar/>
        <div className="signUpBackground">
        <div className="signUpBox">
            <div className="signUpText"> Sign up to NITT Placement Portal</div>
            <input type="text" placeholder="Roll number"></input>
            <input type="text" placeholder="Password"></input>
            <input className="submit-btn" type="submit" placeholder="Submit"></input>
        </div>

        </div>
        </>
    );
};

export default SignUp;