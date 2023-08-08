import React from "react";
import "../../index.css";
import "./admin.css";

import Sidebar from "../../components/sidebar/Sidebar";

const Admin = () => {
  return (
    <Sidebar>
      <div className="p-8">
        <div className="col-span-full">
          <h1 className="text-5xl font-bold text-slate-800">Add Admin</h1>
        </div>
      </div>
      <form className="grid w-full h-screen grid-cols-5 grid-rows-5 gap-8 px-8 text-slate-800">
        {/* <div className="col-span-full">
          <h1 className="text-5xl font-bold">Add Admin</h1>
        </div> */}
        <div className="col-start-1 col-end-4 row-start-1 row-end-5">
          <div className="p-5 rounded-lg bg-slate-300">
            {/* <form action=""> */}
            <div className="mb-5">
              <label htmlFor="">Nama</label>
              <input
                type="text"
                id="username"
                required
                placeholder="Masukkan nama"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className="w-full ring-1 ring-slate-400 p-2.5 rounded-md focus:ring-blue-600 focus:ring-2 hover:ring-2 hover:ring-blue-400 bg-[#F1F3F5] focus:shadow-md focus:shadow-sky-600 text-white"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="">Email</label>
              <input
                type="text"
                id="username"
                required
                placeholder="Masukkan email"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className="w-full ring-1 ring-slate-400 p-2.5 rounded-md focus:ring-blue-600 focus:ring-2 hover:ring-2 hover:ring-blue-400 bg-[#F1F3F5] focus:shadow-md focus:shadow-sky-600 text-white"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="">Password</label>
              <input
                type="text"
                id="username"
                required
                placeholder="Masukkan password"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className="w-full ring-1 ring-slate-400 p-2.5 rounded-md focus:ring-blue-600 focus:ring-2 hover:ring-2 hover:ring-blue-400 bg-[#F1F3F5] focus:shadow-md focus:shadow-sky-600 text-white"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="">Confirm Password</label>
              <input
                type="text"
                id="username"
                required
                placeholder="Masukkan password"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className="w-full ring-1 ring-slate-400 p-2.5 rounded-md focus:ring-blue-600 focus:ring-2 hover:ring-2 hover:ring-blue-400 bg-[#F1F3F5] focus:shadow-md focus:shadow-sky-600 text-white"
              />
            </div>
            {/* </form> */}
          </div>
        </div>

        <div className="grid grid-cols-1 col-start-4 col-end-6 grid-rows-4 row-start-1 row-end-3">
          <div className="flex items-center px-5 rounded-t-lg shadow-lg bg-slate-300">
            <span className="text-xl font-semibold">
              Tambah akun admin baru
            </span>
          </div>
          <div className="flex items-center justify-center row-start-2 row-end-4 bg-white rounded-b-lg shadow-lg">
            <button className="p-3 w-[80%] bg-sky-800 text-white font-semibold rounded-lg">
              Tambah admin
            </button>
          </div>
        </div>
      </form>
    </Sidebar>
  );
};

export default Admin;
