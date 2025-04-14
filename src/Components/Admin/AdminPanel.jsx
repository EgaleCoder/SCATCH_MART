import React from "react";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div className="block gap-[20px]">
        <div className="w-full">
          <AdminNavbar />
        </div>
        <div className="w-full h-full">
          <div className="flex gap-[10px]">
            <div className="h-screen">
              <Sidebar />
            </div>
            <div className="w-full h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
