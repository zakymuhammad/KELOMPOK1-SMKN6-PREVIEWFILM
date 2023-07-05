import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/tmoview.png";
// import { MdEmail } from "react-icons/md";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const navigate = useNavigate();

  // const displayLoginNotification = () => {
  //   toast.success("LoggedIn Successful");
  // };

  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/login", {
        name: name,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen hero">
      <div className="card-form w-[450px] h-auto">
        <form onSubmit={Auth} action="" className="p-10">
          <div className="flex flex-col items-center justify-center w-full">
            <p>{msg}</p>
            <img src={logo} alt="" className="w-12 h-12" />
          </div>
          <div className="flex items-center justify-center w-full h-20">
            <h1 className="text-2xl font-semibold text-white">
              Login Admin Account
            </h1>
          </div>

          <div className="mb-5">
            <input
              type="text"
              id="username"
              required
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 rounded-md bg-transparent ring-1 ring-blue-600"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2.5 rounded-md bg-transparent ring-1 ring-blue-600"
            />
          </div>

          <div className="">
            <button
              // onClick={displayLoginNotification}
              className="text-white py-2.5 px-10 rounded-md bg-sky-700 hover:bg-sky-500 hover:ring-2 hover:ring-bg-sky-200 hover:text-slate-800 hover:font-bold"
            >
              Submit
            </button>
          </div>

          {/* <div className="text-white">
            <span>
              create new account,{" "}
              <button
                type="submit"
                className="text-sky-400 hover:text-sky-300"
                onClick={() => navigate.push("/signup")}
              >
                SignUp
              </button>
            </span>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Signin;
