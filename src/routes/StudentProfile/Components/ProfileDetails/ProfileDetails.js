import React from "react";
import "./ProfileDetails.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProfileDetails =()=>{
    const navigate = useNavigate();
   
    const userDetails1 = JSON.parse(window.localStorage.getItem('user'));
    const userDetails2 = JSON.parse(window.localStorage.getItem('user_details'));
    const handleLogout = async(e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="student-profile-bg">
            <button onClick={handleLogout}>
                logout
            </button>
            <div className="student-profile-heading"> Student Profile</div>
            
            <div className="student-profile-details">
            
            <br />
            <p>Roll number: {userDetails1.roll}  </p>
            
            <br />
            <p>Name: {userDetails2.name}  </p>
            <p>Gender: {userDetails2.gender}  </p>
            <p>Programme: {userDetails2.programme}  </p>
            <p>Branch: {userDetails2.branch}  </p>
            <p>email: {userDetails1.email}  </p>
            <br />
            <p>Phone number: {userDetails1.phoneno} </p>
            <br />
            </div>
        </div>

    );
}

export default ProfileDetails;