import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import UserProfile from "../User/UserProfile";

export default function Example() {
  return (
    <Disclosure>
      <Navbar>
        <Container>
          <NavbarContent>
            <Logo>SCATCH</Logo>
            <RightSection>
              <NavLink to="/cart">
                <IconWrapper>
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span className="text-sm">Cart</span>
                </IconWrapper>
              </NavLink>
              <IconWrapper>
                <UserProfile />
              </IconWrapper>
            </RightSection>
          </NavbarContent>
        </Container>
        <DisclosurePanel className="sm:hidden">
          <DisclosureButton></DisclosureButton>
        </DisclosurePanel>
      </Navbar>
    </Disclosure>
  );
}

const Navbar = styled.nav`
  background-color: #60a5fa; /* Tailwind: bg-blue-400 */
`;

const Container = styled.div`
  max-width: 80rem; /* Tailwind: max-w-7xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem; /* Tailwind: px-2 */
  padding-right: 0.5rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem; /* Tailwind: sm:px-6 */
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem; /* Tailwind: lg:px-8 */
    padding-right: 2rem;
  }
`;

const NavbarContent = styled.div`
  position: relative;
  display: flex;
  height: 4rem; /* Tailwind: h-16 */
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.875rem; /* Tailwind: text-3xl */
  font-weight: bold;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 2rem; /* Tailwind: space-x-8 */
  margin-right: 1.25rem; /* Tailwind: mr-5 */
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid #4b5563; /* Tailwind: border-gray-600 */
  padding-left: 1.5rem; /* Tailwind: pl-6 */
`;
