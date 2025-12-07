import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const Admin: React.FC = () => {
  return (
    <div className="md:flex">
      <Navbar />

      <div
        className={`flex flex-col w-[100%] md:h-[100vh]  page-height bg-main overflow-x-hidden
             bg-gray-200
          } `}
      >
        <div className="overflow-scroll hidden-scrollbar flex h-screen mb-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
