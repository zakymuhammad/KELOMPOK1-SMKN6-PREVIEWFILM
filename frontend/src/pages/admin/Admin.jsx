import React from "react";
import "../../index.css";
import "./admin.css";

import Sidebar from "../../components/sidebar/Sidebar";

const Admin = () => {
  return (
    <Sidebar>
      <form action="" className="w-full h-screen p-8 text-slate-800">
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="bg-pink-200 col-span-full">
            <h1 className="mb-10 text-5xl font-bold">Add Admin</h1>
          </div>
        </div>
      </form>
    </Sidebar>
  );
};

export default Admin;
