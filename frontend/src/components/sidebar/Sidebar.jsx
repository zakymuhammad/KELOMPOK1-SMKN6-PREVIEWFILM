import React, { useState, useEffect } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { LuFileInput } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrSettingsOption } from "react-icons/gr";

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
    { name: "Setting", icon: <GrSettingsOption /> },
  ];

  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:7000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      // console.log(decoded);
      setName(decoded.name);
    } catch (error) {}
  };

  return (
    <div className="flex bg-slate-100 text-slate-800">
      <div className="w-auto h-screen pt-10 text-black border-r border-gray-400 px-9">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-9 h-9" />
          {/* <div className="text-xl font-bold">Movie Admin</div> */}
        </div>
        <div className="">
          <ul>
            <div className="my-7">Menu</div>
            {menuItem.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className="flex mb-5 link"
                  activeclassName="active"
                >
                  <div className="w-5 h-5 mr-2 icon">{item.icon}</div>
                  <div className="link_text">{item.name}</div>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="pt-8">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Slidebar;
