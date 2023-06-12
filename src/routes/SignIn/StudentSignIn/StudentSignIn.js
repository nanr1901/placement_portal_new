import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./SignIn.css";

const StudentSignIn =()=>
{
    return(
        <>
        <NavBar/>
        <div className="signInBackground">
        <div className="signInBox">
            <div className="signInText"> Sign in to NITT Placement Portal</div>
            <input type="text" placeholder="Roll number"></input>
            <input type="text" placeholder="Password"></input>
            <input className="submit-btn" type="submit" placeholder="Submit"></input>
        </div>

        </div>
        </>
    );
};

export default StudentSignIn;