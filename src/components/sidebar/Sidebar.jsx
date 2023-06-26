import React from "react";
import "../../index.css";

import { LuFileInput } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrSettingsOption } from "react-icons/gr";

import Logo from "../../assets/tmoview.png";
import { NavLink } from "react-router-dom";

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

  return (
    <div className="flex bg-slate-100 text-slate-800">
      <div className="h-screen border-r border-gray-400 w-auto px-9 pt-10 text-black">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="logo" className="w-9 h-9" />
          {/* <div className="font-bold text-xl">Movie Admin</div> */}
        </div>
        <div className="">
          <ul>
            <div className="my-7">Menu</div>
            {menuItem.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className="link mb-5 flex"
                  activeclassName="active"
                >
                  <div className="icon mr-2 w-5 h-5">{item.icon}</div>
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
