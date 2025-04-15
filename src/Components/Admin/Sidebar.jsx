import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAdminContext } from "../../context/adminContext";

function Sidebar({ admin }) {
  const { fullname, email } = admin;
  const navigate = useNavigate();
  const location = useLocation();
  const { adminLogout, isAdminLoggedIn } = useAdminContext();

  const logout = async (e) => {
    e.preventDefault();
    await adminLogout();
  };
  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin-login");
    }
  }, [isAdminLoggedIn]);
  return (
    <>
      <SidebarWrapper>
        <TopSection>
          <NavList>
            <li>
              <NavItem to="/admin" $active={location.pathname === "/admin"}>
                <span className="text-xl">Dashboard</span>
              </NavItem>
            </li>

            <li>
              <NavGroup>
                <summary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <span>Users</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <SubMenu>
                  <li>
                    <NavItem
                      to="/admin/activeuser"
                      $active={location.pathname === "/admin/activeuser"}
                    >
                      Show Users
                    </NavItem>
                  </li>
                </SubMenu>
              </NavGroup>
            </li>

            <li>
              <NavGroup>
                <summary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1.106-1.789l-7-4a2 2 0 0 0-1.788 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1.106 1.789l7 4a2 2 0 0 0 1.788 0l7-4A2 2 0 0 0 21 16ZM12 3.236 18.764 7 12 10.764 5.236 7ZM5 8.868l6.5 3.736v6.528L5 15.396Zm14 6.528-6.5 3.736v-6.528L19 8.868Z" />
                  </svg>

                  <span>Products</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <SubMenu>
                  <li>
                    <NavItem
                      to="/admin/showproducts"
                      $active={location.pathname === "/admin/showproducts"}
                    >
                      Show Products
                    </NavItem>
                  </li>
                  <li>
                    <NavItem
                      to="/admin/addproduct"
                      $active={location.pathname == "/admin/addproduct"}
                    >
                      Add Products
                    </NavItem>
                  </li>
                </SubMenu>
              </NavGroup>
            </li>

            <li>
              <NavGroup>
                <summary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                  </svg>
                  <span>Account</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <SubMenu>
                  <li>
                    <NavItem href="#">Details</NavItem>
                  </li>
                  <li>
                    <NavItem href="#">Security</NavItem>
                  </li>
                  <li>
                    <NavItem onClick={logout}>Logout</NavItem>
                  </li>
                </SubMenu>
              </NavGroup>
            </li>
          </NavList>
        </TopSection>

        <Footer>
          <UserLink href="#">
            <Avatar
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40"
              alt=""
            />
            <UserInfo>
              <strong>{fullname}</strong><br />
              <span>{email}</span>
            </UserInfo>
          </UserLink>
        </Footer>
      </SidebarWrapper>
    </>
  );
}

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 270px;
  background-color: #093e44;
  border-right: 1px solid #0c737e;
`;

const TopSection = styled.div`
  padding: 1.5rem 1rem;
`;

const NavList = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NavItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-size: 1em;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.$active ? "#0c737e" : "transparent")};
  transition: all 0.2s;

  &:hover {
    background-color: #0c737e;
  }
`;

const NavGroup = styled.details`
  & summary {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.4em;

    &:hover {
      background-color: #0c737e;
    }

    &::-webkit-details-marker {
      display: none;
    }
  }

  &.open summary svg {
    transform: rotate(-180deg);
  }
`;

const SubMenu = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Footer = styled.div`
  border-top: 1px solid #0c737e;
`;

const UserLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #0c737e;
`;

const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  object-fit: cover;
`;

const UserInfo = styled.div`
  font-size: 0.75rem;

  strong {
    font-weight: 500;
  }
`;

export default Sidebar;
