import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <StyledWrapper>
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8 text-center md:text-left">
          <div className="text-6xl sm:text-7xl text-blue-400 font-extrabold mb-6">404</div>
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-snug mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <NavLink
            to="/"
            className="inline-block px-6 py-3 text-sm font-medium leading-5 shadow-2xl text-white transition duration-300 border border-transparent rounded-lg focus:outline-none bg-blue-400 hover:bg-blue-500 active:bg-red-600"
          >
            Back to Homepage
          </NavLink>
        </div>

        <div className="w-full lg:w-1/2 mx-5 my-8 lg:my-12 flex justify-center lg:justify-end">
          <img
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            alt="Page not found"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default NotFoundPage;

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f9fafb; /* Tailwind's bg-gray-50 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .container {
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    img {
      margin-top: 2rem;
    }
  }
`;
