import React from "react";
import "../../index.css";
import "./admin.css";

import Sidebar from "../../components/sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="w-full min-h-screen bg-white text-slate-800">
      <Sidebar />
    </div>
  );
};

export default Admin;
