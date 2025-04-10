import React from "react";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import Home from "./Home";

const AdminPanel = () => {
  return (
    <>
      <div class="block gap-[20px]">
        <div class="w-full"><AdminNavbar/></div>
        <div class="w-full h-full">
          <div class="flex gap-[10px]">
            <div class="h-full"><Sidebar></Sidebar></div>
            <div class="w-full h-full"><Home/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
