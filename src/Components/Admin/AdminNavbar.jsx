import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";



function AdminNavbar() {
  return (
    <>
       
       <Disclosure>
      <Navbar>
        <Container>
          <NavbarContent>
            
            
              <NavLink to="/admin">
                
              </NavLink>
              
            
          </NavbarContent>
        </Container>
        <DisclosurePanel className="sm:hidden">
          <DisclosureButton></DisclosureButton>
        </DisclosurePanel>
      </Navbar>
 
      </Disclosure>
          
       
    </>
  )
}
const Navbar = styled.nav`
  background-color:rgb(12, 115, 126); /* Tailwind: bg-blue-400 */
  
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











export default AdminNavbar
