import React from "react";
import NavBar from "../NavBar/NavBar";
import "./SignUp.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp =()=>
{
    const [roll,setRoll] = useState();
    const [email,setEmail] = useState("");
    const [phoneno,setPhoneno] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const collectData= async(e)=>{
        e.preventDefault();
        console.warn(roll,email,phoneno,password);
        let result = await fetch("http://localhost:8800/api/auth/register",{
            method:'post',
            body:JSON.stringify({roll,email,phoneno,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        
        result = await result.json();
        console.warn(result);
        if(result === "scam") alert("student record not found. Please check roll number.");
        if(result.roll){
            navigate('/');
        }
        
        
    }

    return(
        <>
        <NavBar/>
        <div className="signUpBackground">
        <div className="signUpBox">
            <div className="signUpText"> Sign up to NITT Placement Portal</div>
            <form>
            <label className='label'>
                roll:
                <p> </p>
                <input
                    className='input'
                    type='text'
                    name='roll'
                    value={roll}
                    onChange={(e)=>setRoll(e.target.value)}
                />
            </label>
            <p> </p>
            <label className='label'>
                email:
                <p> </p>
                <input
                    className='input'
                    type='text'
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </label>
            <p> </p>
            <label className='label'>
                phoneno:
                <p> </p>
                <input
                    className='input'
                    type='text'
                    name='phoneno'
                    value={phoneno}
                    onChange={(e)=>setPhoneno(e.target.value)}
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
            <button onClick={collectData}>
                signup!
            </button>
        </form>

        </div>

        </div>
        </>
    );
};

export default SignUp;