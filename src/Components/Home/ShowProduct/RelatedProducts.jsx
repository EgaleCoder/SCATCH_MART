import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { formatPrice } from "../../../utils/priceFormat";

function RelatedProducts({ products, isLoading }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for skeleton effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || loading) {
    return (
      <StyledWrapper>
        {[...Array(4)].map((_, index) => (
          <SkeletonCard key={index} className="card">
            <div className="skeleton-image" />
            <div className="skeleton-title" />
            <div className="skeleton-price" />
          </SkeletonCard>
        ))}
      </StyledWrapper>
    );
  }

  if (!products || products.length === 0) {
    return <NoProducts>No related products found</NoProducts>;
  }

  return (
    <StyledWrapper>
      {products.map((product, index) => (
        <NavLink to={`/product/${product._id}`} key={index}>
          <div className="card">
            <div className="image">
              <img
                src={product.image[0]}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </div>
            <span className="title">{product.name}</span>
            <span className="price">{formatPrice(product.price)}</span>
          </div>
        </NavLink>
      ))}
    </StyledWrapper>
  );
}

// Skeleton loading animation
const loadingAnimation = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SkeletonCard = styled.div`
  .skeleton-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  .skeleton-title,
  .skeleton-price {
    height: 20px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    margin: 8px 0;
    border-radius: 4px;
  }

  .skeleton-title {
    width: 80%;
  }

  .skeleton-price {
    width: 40%;
  }
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1.1rem;
  width: 100%;
`;


const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 2rem;
  height: auto;

  .card {
    position: relative;
    width: 15.875em;
    height: 20.5em;
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
    object-fit: contain; 
  }

  .card::after {
    content: "Add to Cart";
    padding-top: 1em;
    padding-left: 4.6em;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 90%;
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
  .skeleton {
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 1200px 100%;
    animation: shimmer 1.2s infinite linear;
    border-radius: 4px;
  }

  @keyframes shimmer {
    0% {
      background-position: -1200px 0;
    }
    100% {
      background-position: 1200px 0;
    }
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

export default RelatedProducts;
