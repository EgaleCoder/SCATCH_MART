import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import TOPBANNER from "../assets/Banner.png";
import CATAGORYBANNER from "../assets/CATAGORY BANNER.png";
import ShowProducts from "./ShowProducts";
import CategoryCard from "../Components/Home/CategoryCard";


function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <MainSection>
        {isLoading ? (
          <SkeletonBanner />
        ) : (
          <a href="#">
            <BackgroundDiv
              loading="lazy"
              style={{ backgroundImage: `url(${TOPBANNER})` }}
            />
          </a>
        )}

        {isLoading ? (
          <SkeletonTitle />
        ) : (
          <SectionTitle>
            <SectionTitleText>Top Categories to choose from</SectionTitleText>
            <SectionTitleDivider />
          </SectionTitle>
        )}

        <CategoryBannerSection>
          {isLoading ? (
            <SkeletonBanner style={{ height: '40vh' }} />
          ) : (
            <a href="#">
              <BackgroundDivCatogary
                loading="lazy"
                style={{ backgroundImage: `url(${CATAGORYBANNER})` }}
              />
            </a>
          )}
        </CategoryBannerSection>
        <CategoryCardSection>
          <CategoryCard />
        </CategoryCardSection>
        <div id="products">
          <ProductsSection>
            {isLoading ? (
              <SkeletonTitle style={{ width: '200px' }} />
            ) : (
              <SectionTitle>
              </SectionTitle>
            )}
            <ShowProducts />
          </ProductsSection>
        </div>
      </MainSection>
      <Footer />
    </>
  );
}

const MainSection = styled.div`
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1.5rem;
  }

  @media (min-width: 1024px) {
    margin-top: 0.5rem;
  }
`;

const SectionTitle = styled.span`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-weight: 600;

  @media (min-width: 768px) {
    margin-top: 1rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  @media (min-width: 1024px) {
    margin-top: 1.5rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const SectionTitleText = styled.span`
  flex-shrink: 0;
  padding-inline-end: 1rem;
  color: #312e81;
`;

const SectionTitleDivider = styled.span`
  height: 1px;
  flex: 1 1 0%;
  background: linear-gradient(to left, transparent, #6b21a8);
`;

const CategoryBannerSection = styled.div`
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    margin-top: 1.5rem;
  }
`;

const CategoryCardSection = styled.div`
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    margin-top: 1rem;
  }
`;

const ProductsSection = styled.div`
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    margin-top: 1.5rem;
  }
`;

// Styled component for background div
const BackgroundDiv = styled.div`
  width: 100%;
  height: 70vh;
  background-size: 100% 100%; /* Stretches image to fit */
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: 640px) {
    /* Apply only to mobile view */
    height: 20vh;
  }
`;

// Styled component for category background div
const BackgroundDivCatogary = styled.div`
  width: 100%;
  height: 70vh;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  @media (max-width: 640px) {
    /* Apply only to mobile view */
    height: 20vh;
  }
`;

// Skeleton loading animation
const shimmerAnimation = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Skeleton component for banner
const SkeletonBanner = styled.div`
  width: 100%;
  height: 70vh;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmerAnimation} 1.5s infinite;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  
  @media (max-width: 640px) {
    height: 20vh;
  }
`;

// Skeleton component for section title
const SkeletonTitle = styled.div`
  height: 2.5rem;
  width: 300px;
  max-width: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmerAnimation} 1.5s infinite;
  border-radius: 4px;
  margin: 1.5rem 0;
`;

export default Home;
