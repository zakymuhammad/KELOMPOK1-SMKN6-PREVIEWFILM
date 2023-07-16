import React, { useState, useEffect } from "react";
import "../../index.css";
// import { useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";

import { LuFileInput } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";

import logo from "../../assets/tmoview.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Slidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    // { name: "Account", icon: "" },
    // { name: "Cards", icon: "" },
    { path: "/add-movie", name: "Add Movie", icon: <LuFileInput /> },
    // { name: "Loan Calculator", icon: "" },
    { path: "/add-admin", name: "Add Admin", icon: <BsPersonAdd /> },
  ];

  // const [name, setName] = useState("");
  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:7000/token");
  //     setToken(response.data.accessToken);
  //     const decoded = jwt_decode(response.data.accessToken);
  //     // console.log(decoded);
  //     setName(decoded.name);
  //   } catch (error) {}
  // };

  return (
    <div className="flex bg-[#202323]">
      <div className="w-auto h-screen text-black border-r border-gray-400 px-9">
        <div className="flex items-center justify-center">
          {/* <img src={logo} alt="logo" className="w-9 h-9" /> */}
          {/* <div className="text-xl font-bold">Movie Admin</div> */}
        </div>
        <div className="text-white">
          <ul>
            <div className="my-8">Menu</div>
            {menuItem.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className="flex mb-5 link"
                  activeclassName="active"
                >
                  <div className="flex items-center">
                    <div className="mr-4 icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                  </div>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#F1F3F5]">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Slidebar;
