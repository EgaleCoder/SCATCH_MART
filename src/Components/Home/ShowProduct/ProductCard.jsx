import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../../../context/productContext.jsx";
import CardLoader from "./CardLoader.jsx";
import { NavLink } from "react-router-dom";

const ProductCard = ({ products }) => {
  const { isLoading } = useProductsContext();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CardLoader />
      </div>
    );
  }
  if (products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <StyledWrapper>
      {products.map((product, index) => (
        <NavLink to={`/product/${product._id}`} key={index}>
          <div className="card">
            <div className="image">
              <img
                src={product.image.trim()}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Ensures image fits inside without overflow
                }}
              />
            </div>
            <span className="title">{product.name}</span>
            <span className="price">₹ {product.price}</span>
          </div>
        </NavLink>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: auto;

  .card {
    position: relative;
    width: 13.875em;
    height: 18.5em;
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 120ms;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: white;
    padding: 0.5em;
    padding-bottom: 3.4em;
    border: 0.1px solid #eaeaf2;
  }

  .card .image {
    background: white;
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .card img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Ensures proper fitting */
  }

  .card::after {
    content: "Add to Cart";
    padding-top: 1.25em;
    padding-left: 3.5em;
    position: absolute;
    left: 0;
    bottom: -60px;
    background: #60a5fa;
    color: #fff;
    height: 3.5em;
    width: 100%;
    transition: all 80ms;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0;
  }

  .card .title {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    position: absolute;
    left: 0.625em;
    bottom: 1.875em;
    font-weight: 400;
    color: #000;
  }

  .card .price {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 0.9em;
    position: absolute;
    left: 0.625em;
    bottom: 0.625em;
    color: #000;
  }

  .card:hover::after {
    bottom: 0;
    opacity: 1;
  }

  .card:active {
    transform: scale(0.98);
  }

  .card:active::after {
    content: "Added !";
    height: 3.125em;
  }
  @media (max-width: 640px) {
    /* Apply only to mobile view */
    .card {
      width: 9.875em;
      height: 14.5em;
    }
    .card::after {
      padding-top: 1em;
      padding-left: 1.8em;
      height: 3.5em;
    }
  }
`;

export default ProductCard;
