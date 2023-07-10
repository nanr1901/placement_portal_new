import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./SignIn.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const StudentSignIn =()=>
{
    const [roll,setRollno] = useState();
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSignin = async(e)=>{
        e.preventDefault();
        console.warn(roll,password);
        let result = await fetch("http://localhost:8800/api/auth/login",{
            method:'post',
            body:JSON.stringify({roll,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.roll){
            let result_student = await fetch("http://localhost:8800/api/user/userDetails",{
                method:'post',
                body:JSON.stringify({roll}),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            result_student = await result_student.json();
            localStorage.setItem('user_details',JSON.stringify(result_student))
            localStorage.setItem('user',JSON.stringify(result));
            
            navigate('/StudentProfile');
        }else{
            alert("Wrong email or password!");
        }
       
       
    }

    return(
        <>
        <NavBar/>
        <div className="signInBackground">
        <div className="signInBox">
            <div className="signInText"> Sign in to NITT Placement Portal</div>
            <form>
            <label className='label'>
                roll number:
                <p> </p>
                <input
                    className='input'
                    type='text'
                    name='rollno'
                    value={roll}
                    onChange={(e)=>setRollno(e.target.value)}
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

export default StudentSignIn;