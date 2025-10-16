import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const CategoryCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <StyledWrapper>
        {[...Array(4)].map((_, index) => (
          <SkeletonCard key={`skeleton-${index}`} className="card" />
        ))}
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image">
          <img
            src="https://zouk.co.in/cdn/shop/files/WavBeach_Women_s_Office_Bag.jpg?v=1741158078&width=1500"
            alt="Women's Fashion"
            loading="lazy"
          />
        </div>
        <button className="card-button">WOMEN'S FASHION</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://i.etsystatic.com/10661967/r/il/9a0256/4244557858/il_fullxfull.4244557858_240p.jpg"
            alt="Men's Fashion"
            loading="lazy"
          />
        </div>
        <button className="card-button">MEN'S FASHION</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://www.rabitat.com/cdn/shop/products/2_ca90d870-687f-498b-9d6b-21bf171feb6c.jpg?v=1742823498&width=1200"
            alt="Kid's Fashion"
            loading="lazy"
          />
        </div>
        <button className="card-button">KIDZ FASHION</button>
      </div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://www.trawoc.com/cdn/shop/files/pngtree-wall-texture-rough-gray-background-image_774152.jpg?v=1741693517&width=750"
            alt="Backpacks"
            loading="lazy"
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
// Skeleton loading animation
const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  `;

const SkeletonCard = styled.div`
    width: 250px;
    height: 294px;
    background: #f5f5f5;
    position: relative;
    border: 2px solid #e0e0e0;
    overflow: hidden;
    
    .skeleton-image {
      width: 100%;
      height: 85%;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: ${shimmer} 1.5s infinite;
    }
    
    .skeleton-button {
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 30px;
      border-radius: 1rem;
      background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: ${shimmer} 1.5s infinite;
    }
  `;

export default CategoryCard;
