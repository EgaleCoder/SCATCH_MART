import React from "react";
import AdminNavbar from "./AdminNavbar";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useAdminContext } from "../../context/adminContext";
import Loader from "../Home/ShowProduct/CardLoader";

const AdminPanel = () => {
  const { admin, loading } = useAdminContext();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  const { adminDetails } = admin;
  // console.log("products", products);
  // console.log("Admin", adminDetails);
  // console.log("users", users);
  // console.log("orders", orders);
  return (
    <SidebarWrapper>
      <div className="block gap-[20px]">
        <div className="w-full">
          <AdminNavbar />
        </div>
        <div className="w-full h-full">
          <div className="flex gap-[10px]">
            <div className="h-screen">
              <Sidebar admin={adminDetails} />
            </div>
            <div className="w-full h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // height: 100vh;
  // width: 270px;
  background-color: #033136ff;
  // border-right: 1px solid #0c737e;
`;

export default AdminPanel;
