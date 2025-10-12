import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import UserProfile from "../User/UserProfile";

export default function Navbar() {
  return (
    <NavContainer>
      <NavbarContent>
        <NavLink to={"/"}>
          <Logo>SCATCH MART</Logo>
        </NavLink>
        <RightSection>
          <NavLink to="/cart">
            <IconWrapper>
              <ShoppingCartIcon className="h-6 w-6 text-black" />
              <span className="text-sm text-black">Cart</span>
            </IconWrapper>
          </NavLink>
          <IconWrapper>
            <UserProfile />
            <span className="text-sm text-black">Profile</span>
          </IconWrapper>
        </RightSection>
      </NavbarContent>
    </NavContainer>
  );
}

// Styled Components
const NavContainer = styled.nav`
  background-color: #60a5fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: black;

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media (min-width: 768px) {
    border-left: 1px solid #4b5563;
    padding-left: 1.5rem;
  }
`;
