import React, { useRef, Link, useEffect, useState } from "react";
import Home from "../App.js"
import './LoginSignUp.css';
function LoginSignUp(){
    const nama=useRef()
    const email=useRef()
    const password=useRef()
    const [showHome,setShowHome]=useState(false)
    const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localNama=localStorage.getItem("nama")
    

    useEffect(()=>{
        if(localSignUp){
            setShowHome(true)
        }
        if(localEmail){
            setShow(true)
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

    const handleLogin=()=>{
        if(email.current.value&&password.current.value==localPassword){
            localStorage.setItem("signUp",email.current.value)
            window.location.reload()
        }else{
            alert("Please enter a valid Credential")
        }
    }
    return(
        <div className="hero">
            {showHome?<Home/>:
            (show?
            <div className="container">
                    <h1 className="text-[50px]">Login</h1>
                    <input placeholder="Your Email" type='email' ref={email}></input>
                    <input placeholder="Your Password" type='password' ref={password}></input>
                    <button onClick={handleLogin}>Login</button>
            </div>
            :
            <div className="container">
                    <h1 className="text-[50px]">Sign Up</h1>
                    <input placeholder="Your Name" type='text' ref={nama}></input>
                    <input placeholder="Your Email" type='email' ref={email}></input>
                    <input placeholder="Your Password" type='password' ref={password}></input>
                    <button onClick={handleClick}>Sign Up</button>
            </div>)
            }
        </div>
    );
}
export default LoginSignUp;