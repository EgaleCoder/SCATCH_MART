import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import UserProfile from "../User/UserProfile";

export default function Example() {
  return (
    <Navbar>
      <Container>
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
      </Container>
    </Navbar>
  );
}

// Styled Components
const Navbar = styled.nav`
  background-color: #60a5fa;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 0.5rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
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
  margin-right: 1.25rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid #4b5563;
  padding-left: 1.5rem;
`;
