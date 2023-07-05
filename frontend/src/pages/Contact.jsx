import React from "react";
import "../index.css";
import Logo from "../assets/play.png";
import Gabriel from "../assets/ImageTeam/gabriel.jpg";

const Contact = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl">Development Team</h1>
      <div className="grid grid-cols-3 gap-2 mt-32">
        <div className="grid grid-rows-2 col-start-2 col-end-3 flex justify-center flex-wrap">
          <img src={Logo} alt="" className="m-auto" />
          <p>Arzaki Muhamad Fadil</p>
        </div>
        <div className="grid grid-rows-2 row-start-2 flex justify-center flex-wrap">
          <img src={Logo} alt="" className="m-auto" />
          <p>Agnes Chrisfandika C</p>
        </div>
        <div className="grid grid-rows-2 row-start-2 flex justify-center flex-wrap">
          <img src={Gabriel} alt="" className="w-32 h-32 m-auto rounded-full" />
          <p>Gabriel Handara Putra N</p>
        </div>
        <div className="grid grid-rows-2 row-start-2 flex justify-center flex-wrap">
          <img src={Logo} alt="" className="m-auto" />
          <p>Zaskia Ayu Inayah</p>
        </div>
        <div className="grid grid-rows-2 row-start-3 flex justify-center flex-wrap">
          <img src={Logo} alt="" className="m-auto" />
          <p>Reyvan Yoan Gisavana</p>
        </div>
        <div className="grid grid-rows-2 row-start-3 flex justify-center flex-wrap">
          <img src={Logo} alt="" className="m-auto" />
          <p>Maisya Faradila</p>
        </div>
        <div className="grid grid-rows-2 row-start-3 flex justify-center flex-wrap">
          <img src={Logo} alt="" className="m-auto" />
          <p>Yusuf Muhammad Farrel A.N</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
