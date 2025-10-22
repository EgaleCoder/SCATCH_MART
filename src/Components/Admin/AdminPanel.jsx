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
  
  return (
    <PanelWrapper>
      {/* Fixed Navbar */}
      <NavbarContainer>
        <AdminNavbar />
      </NavbarContainer>
      
      {/* Main Content Area */}
      <MainContent>
        {/* Fixed Sidebar */}
        <SidebarContainer>
          <Sidebar admin={adminDetails} />
        </SidebarContainer>
        
        {/* Scrollable Outlet */}
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </MainContent>
    </PanelWrapper>
  );
};

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #033136ff;
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background-color: #033136ff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MainContent = styled.div`
  display: flex;
  margin-top: 60px; /* Adjust based on your navbar height */
  height: calc(100vh - 60px);
  overflow: hidden;
`;

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 60px; /* Same as navbar height */
  height: calc(100vh - 60px);
  width: 270px;
  background-color: #033136ff;
  border-right: 1px solid #0c737e;
  overflow-y: auto;
  z-index: 50;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #022c30;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #0c737e;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #0a5f68;
  }
`;

const OutletContainer = styled.div`
  margin-left: 270px; /* Same as sidebar width */
  width: calc(100% - 270px);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f8f9fa;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default AdminPanel;