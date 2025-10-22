import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useAdminContext } from "../../context/adminContext";

function AdminNavbar() {
  const navigate = useNavigate();
  const { admin, adminLogout } = useAdminContext();
  const { adminDetails } = admin || {};
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = async () => {
    await adminLogout();
    navigate("/admin-login");
  };

  return (
    <Navbar>
      <Container>
        <NavbarContent>
          {/* Logo/Brand Section */}
          <LogoSection>
            <NavLink to="/admin">
              <Logo>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                <BrandText>Admin Panel</BrandText>
              </Logo>
            </NavLink>
          </LogoSection>

          {/* Right Section */}
          <RightSection>
            {/* Search Bar */}
            <SearchContainer>
              <SearchIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </SearchIcon>
              <SearchInput placeholder="Search..." />
            </SearchContainer>

            {/* Notifications */}
            <NotificationButton>
              <NotificationBadge>3</NotificationBadge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
              </svg>
            </NotificationButton>

            {/* Profile Dropdown */}
            <ProfileSection>
              <ProfileButton onClick={() => setShowProfileMenu(!showProfileMenu)}>
                <ProfileAvatar>
                  {adminDetails?.fullname?.charAt(0)?.toUpperCase() || "A"}
                </ProfileAvatar>
                <ProfileInfo>
                  <ProfileName>{adminDetails?.fullname || "Admin"}</ProfileName>
                  <ProfileRole>Administrator</ProfileRole>
                </ProfileInfo>
                <DropdownArrow $isOpen={showProfileMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </DropdownArrow>
              </ProfileButton>

              {showProfileMenu && (
                <DropdownMenu>
                  <DropdownItem onClick={() => navigate("/admin/admin-details")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                    </svg>
                    Profile
                  </DropdownItem>
                  <DropdownItem onClick={() => navigate("/admin")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </svg>
                    Dashboard
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem onClick={handleLogout} $danger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
                    </svg>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              )}
            </ProfileSection>
          </RightSection>
        </NavbarContent>
      </Container>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background: linear-gradient(135deg, #093e44 0%, #0c737e 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
`;

const NavbarContent = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const LogoSection = styled.div`
  flex-shrink: 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const BrandText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (max-width: 640px) {
    display: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 400px;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.625rem 1rem 0.625rem 2.75rem;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  font-size: 0.875rem;
  transition: all 0.2s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const NotificationButton = styled.button`
  position: relative;
  padding: 0.5rem;
  color: white;
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background-color: #ef4444;
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.125rem 0.375rem;
  border-radius: 9999px;
  min-width: 1.125rem;
  text-align: center;
`;

const ProfileSection = styled.div`
  position: relative;
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ProfileAvatar = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: #093e44;
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileName = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
`;

const ProfileRole = styled.span`
  font-size: 0.75rem;
  opacity: 0.8;
`;

const DropdownArrow = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: 200px;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  z-index: 50;
  animation: slideDown 0.2s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  color: ${props => props.$danger ? '#ef4444' : '#2d3748'};
  font-size: 0.875rem;
  font-weight: 500;
  text-align: left;

  &:hover {
    background-color: ${props => props.$danger ? '#fee2e2' : '#f7fafc'};
  }

  svg {
    flex-shrink: 0;
  }
`;

const DropdownDivider = styled.div`
  height: 1px;
  background-color: #e2e8f0;
  margin: 0.25rem 0;
`;

export default AdminNavbar;