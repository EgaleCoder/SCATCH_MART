import React from 'react'

function Sidebar() {
  return (
    <>
      <SidebarWrapper>
      <TopSection>
        <Logo>S</Logo>

        <NavList>
          <li>
            <NavItem href="#" active>
              General
            </NavItem>
          </li>

          <li>
            <NavGroup>
              <summary>
                <span>Teams</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <SubMenu>
                <li>
                  <NavItem href="#">Banned Users</NavItem>
                </li>
                <li>
                  <NavItem href="#">Calendar</NavItem>
                </li>
              </SubMenu>
            </NavGroup>
          </li>

          <li>
            <NavItem href="#">Billing</NavItem>
          </li>
          <li>
            <NavItem href="#">Invoices</NavItem>
          </li>

          <li>
            <NavGroup>
              <summary>
                <span>Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
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
                  <NavItem href="#">Logout</NavItem>
                </li>
              </SubMenu>
            </NavGroup>
          </li>
        </NavList>
      </TopSection>

      <Footer>
        <UserLink href="#">
          <Avatar src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40" alt="" />
          <UserInfo>
            <strong>Eric Frusciante</strong>
            <span>eric@frusciante.com</span>
          </UserInfo>
        </UserLink>
      </Footer>
    </SidebarWrapper>
    </>
  )
}
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width:250px;
  background-color: white;
  border-right: 1px solid #e5e7eb;
`;

const TopSection = styled.div`
  padding: 1.5rem 1rem;
`;

const Logo = styled.span`
  display: grid;
  place-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #60a5fa;
  color: #4b5563;
  font-size: 2rem;
  border-radius: 50%;
`;

const NavList = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NavItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  color: ${props => (props.active ? '#374151' : '#6b7280')};
  background-color: ${props => (props.active ? '#f3f4f6' : 'transparent')};
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`;

const NavGroup = styled.details`
  & summary {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    color: #6b7280;
    border-radius: 0.5rem;

    &:hover {
      background-color: #f3f4f6;
      color: #374151;
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
  border-top: 1px solid #e5e7eb;
`;

const UserLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: white;

  &:hover {
    background-color: #f9fafb;
  }
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

export default Sidebar
