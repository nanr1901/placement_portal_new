import React from "react";
import "./ProfileDetails.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const ProfileDetails =()=>{
    const navigate = useNavigate();
    
    const userDetails = JSON.parse(window.localStorage.getItem('user_details'));
    const recname = userDetails.recname;
    
    const handleOpenApplications = async(e) => {
        e.preventDefault();
        let result = await fetch(`http://localhost:8800/api/user/openApplications/${userDetails._id}`,{
            method:'put',
            body:JSON.stringify({recname}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        alert("Applications have been open to students")
        result = await result.json();
        console.warn(result);
    }
    const handleLogout = async(e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    };
    return (
        <div className="recruiter-profile-bg">
            <div className="recruiter-profile-heading"> Recruiter Profile</div>
            <button onClick={handleLogout}>
                logout
            </button>
            <div className="recruiter-profile-details">
                
                <p>Recruiter: {userDetails.recname}  </p>
                <p>Company: {userDetails.compname}  </p>
                <p>email: {userDetails.email}  </p>
            </div>
            <div className="applicants">
                <button type="button" class="button" onClick={handleOpenApplications}>Open Applications</button>
            </div>
        </div>

    );
}

export default ProfileDetails;