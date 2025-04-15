import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import TOPBANNER from "../assets/TOP BANNER.png";
import CATAGORYBANNER from "../assets/CATAGORY BANNER.png";
import ShowProducts from "./ShowProducts";
import CategoryCard from "../Components/Home/CategoryCard";

function Home() {
  return (
    <>
      <Navbar />
      <div className=" main w-full px-2 md:px-4 mt-4 md:mt-6 lg:mt-2">
        <a href="#">
          <BackgroundDiv
            loading="lazy"
            style={{ backgroundImage: `url(${TOPBANNER})` }}
          ></BackgroundDiv>
        </a>
        <span className="flex items-center mt-2 md:mt-4 lg:mt-6 md:text-3xl lg:text-4xl font-semibold">
          <span className="shrink-0 pe-4 text-purple-900">
            Top Categories to choose from
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-700"></span>
        </span>
        <div className="catogary mt-2 md:mt-4 lg:mt-6">
          <a href="#">
            <BackgroundDivCatogary
              loading="lazy"
              style={{ backgroundImage: `url(${CATAGORYBANNER})` }}
            ></BackgroundDivCatogary>
          </a>
        </div>
        <div className="h-auto  mt-2 md:mt-4 lg:mt-4">
          <CategoryCard />
        </div>
        <div className="h-auto mt-2 md:mt-4 lg:mt-6 ">
          <ShowProducts />
        </div>
      </div>
      <Footer />
    </>
  );
}

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
