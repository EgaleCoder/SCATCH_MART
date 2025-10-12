import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import TOPBANNER from "../assets/Banner.png";
import CATAGORYBANNER from "../assets/CATAGORY BANNER.png";
import ShowProducts from "./ShowProducts";
import CategoryCard from "../Components/Home/CategoryCard";

function Home() {
  return (
    <>
      <Navbar />
      <MainSection>
        <a href="#">
          <BackgroundDiv
            loading="lazy"
            style={{ backgroundImage: `url(${TOPBANNER})` }}
          ></BackgroundDiv>
        </a>
        <SectionTitle>
          <SectionTitleText>Top Categories to choose from</SectionTitleText>
          <SectionTitleDivider />
        </SectionTitle>
        <CategoryBannerSection>
          <a href="#">
            <BackgroundDivCatogary
              loading="lazy"
              style={{ backgroundImage: `url(${CATAGORYBANNER})` }}
            ></BackgroundDivCatogary>
          </a>
        </CategoryBannerSection>
        <CategoryCardSection>
          <CategoryCard />
        </CategoryCardSection>
        <ProductsSection>
          <ShowProducts />
        </ProductsSection>
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

export default Home;
