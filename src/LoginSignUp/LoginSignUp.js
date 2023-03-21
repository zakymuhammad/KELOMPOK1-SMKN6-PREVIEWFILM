import React, { useRef, Link, useEffect, useState } from "react";
import Home from "../App.js"
import './LoginSignUp.css';
function LoginSignUp(){
    const nama=useRef()
    const email=useRef()
    const password=useRef()
    const [showHome,setShowHome]=useState(false)
    const localHome=localStorage.getItem("signUp")
    useEffect(()=>{
        if(localHome){
            setShowHome(true)
        }
    })
    const handleClick=()=>{
        if(nama.current.value&&email.current.value&&password.current.value)
        {
            localStorage.setItem("nama",nama.current.value)
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("signUp",email.current.value)
            alert("Yeay Account Created Successfull!")
            window.location.reload()
        }
    }
    return(
        <div className="hero">
            {showHome?<Home/>:
            <div className="container">
                    <h1 className="text-[50px]">Login</h1>
                    <input placeholder="Your Name" type='text' ref={nama}></input>
                    <input placeholder="Your Email" type='email' ref={email}></input>
                    <input placeholder="Your Password" type='password' ref={password}></input>
                    <button onClick={handleClick}>Login</button>
            </div>
            }
        </div>
    );
}
export default LoginSignUp;