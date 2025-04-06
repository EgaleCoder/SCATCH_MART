import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../../context/addToCartContext";

export const AddToCart = ({ product }) => {
  const { AddToCart } = useCartContext();
  return (
    <StyledWrapper>
      <NavLink
        to={"/cart"}
        onClick={() => {
          AddToCart(product);
        }}
      >
        <button className="CartBtn">
          <span className="IconContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="rgb(17, 17, 17)"
              className="cart"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </span>
          <p className="text">ADD TO CART</p>
        </button>
      </NavLink>
    </StyledWrapper>
  );
};
export const BuyNow = () => {
  return (
    <StyledWrapper>
      <NavLink to={"/cart"}>
        <button className="CartBtn">
          <span className="IconContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="rgb(17, 17, 17)"
              className="buy-now"
            >
              <path d="M568.1 143.3l-68.1 255.2C494 421.2 473.5 432 451.1 432H159.5c-22.3 0-42.7-10.8-54.9-33.6L7.9 206.4C1.5 194.8-1.1 181.3 3.5 168.7S17.8 144 31.4 144h535.3c8.9 0 17.2 4.1 22.4 10.9s6.8 15.6 4.1 24.4zM144 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm288 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
            </svg>
          </span>
          <p className="text">BUY NOW</p>
        </button>
      </NavLink>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .CartBtn {
    width: 240px;
    height: 60px;
    border: none;
    background-color: #60a5fa;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.5s;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
      height: 50px;
    }

    @media (max-width: 480px) {
      height: 48px;
      font-size: 0.9rem;
    }
  }

  .IconContainer {
    position: absolute;
    left: -50px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 2;
    transition-duration: 0.5s;

    @media (max-width: 480px) {
      width: 24px;
      height: 24px;
    }
  }

  .text {
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(17, 17, 17);
    z-index: 1;
    transition-duration: 0.5s;
    font-size: 1.04em;
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 0.9em;
    }
  }

  .CartBtn:hover .IconContainer {
    transform: translateX(78px);
    border-radius: 40px;
    transition-duration: 0.5s;
  }

  .CartBtn:hover .text {
    transform: translate(10px, 0px);
    transition-duration: 0.5s;
  }

  .CartBtn:active {
    transform: scale(0.95);
    transition-duration: 0.5s;
  }
`;
