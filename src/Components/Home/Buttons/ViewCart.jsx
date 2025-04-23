import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ViewCart = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <svg
          viewBox="0 0 16 16"
          className="bi bi-cart-check"
          height={24}
          width={24}
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
        >
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        <NavLink to={"/cart"}>
          <p className="text">View Cart</p>
        </NavLink>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 240px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    gap: 15px;
    background-color: #60a5fa;
    outline: 1px #60a5fa solid;
    border: none;
    cursor: pointer;
    transition: 200ms;
  }

  .button .text {
    color: black;
    font-size: 1.04em;
    font-weight: 600;
    transition: 200ms;
  }

  .button svg path {
    transition: 200ms;
  }

  .button:hover {
    background-color: transparent;
  }

  .button:hover .text {
    color: #60a5fa;
  }

  .button:hover svg path {
    fill: #60a5fa;
  }
`;

export default ViewCart;
