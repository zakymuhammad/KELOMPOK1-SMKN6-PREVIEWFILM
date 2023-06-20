import React from "react";
import "../../../index.css";

import { LuFileInput } from "react-icons/lu";
import { AiTwotoneHome } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";

import Logo from "../../../assets/tmoview.png";

const Slidebar = () => {
  const menu = [
    { name: "Home", icon: <AiTwotoneHome /> },
    // { name: "Account", icon: "" },
    // { name: "Cards", icon: "" },
    { name: "Add Movie", icon: <LuFileInput /> },
    // { name: "Loan Calculator", icon: "" },
    { name: "Setting", icon: <GrSettingsOption /> },
  ];

  return (
    <div className="h-screen border-r border-gray-300 w-64 px-9 pt-10 text-black">
      <div className="flex flex-row items-center">
        <img src={Logo} alt="logo" className="w-9 h-9" />
        <div className="font-bold text-xl">Movie Admin</div>
      </div>
      <div className="">
        <ul>
          <div className="my-7">Menu</div>
          {menu.map((val, index) => {
            return (
              <li key={index} className="mb-5 flex flex-row items-center">
                <div className="mr-2 w-5 h-5">{val.icon}</div>
                <div className="">{val.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Slidebar;
