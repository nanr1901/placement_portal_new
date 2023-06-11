import React from "react";
import {Link} from "react-router-dom"
import "./Login.css";


const Login=()=>{
    return (
        <div className="background">

            <div className="login-box">
                <div className="login">Login</div><br/>
             <Link to="/StudentSignIn" > <button className="student-btn" value="Student">Students</button></Link><br/>
               <Link to="/RecSignIn"> <button className="recruiter-btn" value="Recruiter">Recruiters</button></Link>
               <Link to="/SignUp"><div class="sign-up"> First Time? Sign Up </div></Link> 
            </div>
            <div className="we-care-box">
                <span className="we-care">We Care</span> <br></br>
                <span className="for-your">For Your Hire!</span>
            </div>
            
        </div>

    );
}

export default Login;