import React from "react";
import './LoginSignUp.css';
function SignUp(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    return(
        <div>
            <h1>Login</h1>
            <button onClick={logout}>Logout</button>
            <button>Delete</button>
        </div>
    )
}
export default SignUp;