import React from "react";
import "./StudentProfile.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";

const StudentProfile=()=>
{
    return(
        <>
            <NavBar/>
            <ProfileDetails/>
            <Footer/>
        </>
    );
}
export default StudentProfile;