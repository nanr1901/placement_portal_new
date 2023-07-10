import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./SignIn.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecSignIn =()=>
{
    const [recname, setRecname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async(e)=>{
        e.preventDefault();
        console.warn(recname,password);
        let result = await fetch("http://localhost:8800/api/auth/signin",{
            method:'post',
            body:JSON.stringify({recname,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem('user_details',JSON.stringify(result))
        navigate('/RecruiterProfile');
        
       
       
    }

    return(
        <>
        <NavBar/>
        <div className="signInBackground">
        <div className="signInBox">
            <div className="signInText"> Sign in to NITT Placement Portal</div>
            <form>
            <label className='label'>
                Recruiter name:
                <p> </p>
                <input
                    className='input'
                    type='text'
                    name='rollno'
                    value={recname}
                    onChange={(e)=>setRecname(e.target.value)}
                />
            </label>
            <p> </p>
            <label className='label'>
                password:
                <p> </p>
                <input
                    className='input'
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
               
            </label>
            <p> </p>
            <button onClick={handleSignin}>
                sign in!
            </button>
        </form>

        </div>

        </div>
        </>
    );
};

export default RecSignIn;