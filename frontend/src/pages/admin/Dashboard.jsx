import React from "react";
import "../../index.css";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";

const dashboard = () => {
  // const [name, setName] = useState("");
  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   refreshToken();
  // });

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:7000/token");
  //     setToken(response.data.accessToken);
  //     const decoded = jwt_decode(response.data.accessToken);
  //     console.log(decoded);
  //   } catch (error) {}
  // };

  return (
    <Sidebar>
      <div className="">
        <div className="">DASHBOARD PAGE</div>
        <div className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui
          accusamus architecto quos natus tempore pariatur voluptatem labore ab
          sequi consequatur eum mollitia, sunt minus similique quam dignissimos
          delectus? Est.
        </div>
      </div>
    </Sidebar>
  );
};

export default dashboard;
