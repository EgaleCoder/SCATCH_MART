import React from "react";
import styled from "styled-components";

const CategoryCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image">
          <img
            src="https://zouk.co.in/cdn/shop/files/WavBeach_Women_s_Office_Bag.jpg?v=1741158078&width=1500"
            alt="Backpack"
          />
        </div>
        <button className="card-button">WOMEN'S FASHION</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://i.etsystatic.com/10661967/r/il/9a0256/4244557858/il_fullxfull.4244557858_240p.jpg"
            alt="Backpack"
          />
        </div>
        <button className="card-button">MEN'S FASHION</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://www.rabitat.com/cdn/shop/products/2_ca90d870-687f-498b-9d6b-21bf171feb6c.jpg?v=1742823498&width=1200"
            alt="Backpack"
          />
        </div>
        <button className="card-button">KIDZ FASHION</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://www.trawoc.com/cdn/shop/files/pngtree-wall-texture-rough-gray-background-image_774152.jpg?v=1741693517&width=750"
            alt="Backpack"
          />
        </div>
        <button className="card-button">BACKPACKS</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: auto;
  padding: 20px;

  .card {
    width: 250px;
    height: 294px;
    background: #f5f5f5;
    position: relative;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
    text-align: center; /* Ensure text inside is centered */
  }
  .card-image {
    width: 100%;
    height: 100%; /* Adjust image container height */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: rgb(235, 233, 233); /* Light background */
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ensures image fits without overflow */
  }
  .card-details {
    color: black;
    height: 100%;
    gap: 0.5em;
    display: grid;
    place-content: center;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #008bf8;
    color: #fff;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .text-body {
    color: rgb(134, 134, 134);
  }

  /* Hover Effects */
  .card:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
  @media (max-width: 640px) {
    /* Apply only to mobile view */
    .card {
      height: 200px;
      width: 146px;
    }
  }
`;

export default CategoryCard;
