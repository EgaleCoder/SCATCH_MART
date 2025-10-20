import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import TOPBANNER from "../assets/Banner.png";
import CATAGORYBANNER from "../assets/TOP BANNER.png";
import BagImages from "../assets/BagsCategories.png";
import ShowProducts from "./ShowProducts";
import CategoryCard from "../Components/Home/CategoryCard";
import BagsCategories from "../Components/Home/BagsCategories";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // const categories = [
  //   {
  //     icon: "🎨",
  //     name: "Creative Design",
  //     description: "Stunning visual designs that capture attention and imagination",
  //   },
  //   {
  //     icon: "💻",
  //     name: "Development",
  //     description: "Modern web solutions built with cutting-edge technology",
  //   },
  //   {
  //     icon: "📱",
  //     name: "Mobile Apps",
  //     description: "Seamless mobile experiences for iOS and Android platforms",
  //   },
  //   {
  //     icon: "🚀",
  //     name: "Marketing",
  //     description: "Strategic campaigns that drive growth and engagement",
  //   },
  //   {
  //     icon: "📊",
  //     name: "Analytics",
  //     description: "Data-driven insights to optimize your business performance",
  //   },
  // ];


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
          <BagsCategories imageUrl={BagImages} />

        {isLoading ? (
          <SkeletonBanner />
        ) : (
          <a href="#">
            <BackgroundDiv style={{ backgroundImage: `url(${CATAGORYBANNER})` }} />
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
          {/* {isLoading ? (
            <SkeletonBanner style={{ height: '40vh' }} />
          ) : (
            <a href="#">
              <BackgroundDivCatogary
                loading="lazy"
                style={{ backgroundImage: `url(${CATAGORYBANNER})` }}
              />
            </a>
          )} */}

          {/* <MainContainer>
            <BoxesWrapper>
              {categories.map((cat, index) => (
                <Box key={index}>
                  <BoxImage>{cat.icon}</BoxImage>
                  <BoxContent>
                    <BoxName>{cat.name}</BoxName>
                    <BoxDescription>{cat.description}</BoxDescription>
                  </BoxContent>
                </Box>
              ))}
            </BoxesWrapper>
          </MainContainer> */}
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
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
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


// const MainContainer = styled.div`
//   width: 100%;
//   height: 400px;
//   background-color: white;
//   margin-top: 1rem;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
//   padding: 20px;
//   overflow-x: auto;
//   overflow-y: hidden;
//   display: flex;
//   justify-content: center;

//   /* Smooth scrolling */
//   scroll-behavior: smooth;

//   /* Custom Scrollbar */
//   &::-webkit-scrollbar {
//     height: 6px;
//   }
//   &::-webkit-scrollbar-track {
//     background: #f1f1f1;
//     border-radius: 10px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: #888;
//     border-radius: 10px;
//   }
//   &::-webkit-scrollbar-thumb:hover {
//     background: #555;
//   }

//   @media (max-width: 768px) {
//     height: 280px;
//     padding: 15px;
//       justify-content: normal;
//   }

//   @media (max-width: 480px) {
//     height: 260px;
//     padding: 12px;
//   }
// `;

// const BoxesWrapper = styled.div`
//   display: flex;
//   gap: 40px;
//   height: 100%;
//   min-width: min-content;
//   transition: all 0.3s ease;

//   @media (max-width: 768px) {
//     gap: 15px;
//     transform: scale(0.9);
//     transform-origin: top center;
//   }

//   @media (max-width: 480px) {
//     gap: 13px;
//     transform: scale(0.8);
//   }
// `;

// const Box = styled.div`
//   flex: 0 0 auto;
//   width: 250px;
//   height: 100%;
//   // background: linear-gradient(145deg, #ffffff, #f8f9fa);
//   padding: 15px;
//   display: flex;
//   flex-direction: column;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
//   }

//   @media (max-width: 768px) {
//     width: 160px;
//   }

//   @media (max-width: 480px) {
//     width: 140px;
//     padding: 12px;
//   }
// `;

// const BoxImage = styled.div`
//   width: 100%;
//   height: 300px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 48px;
//   margin-bottom: 18px;
//   transition: background 0.3s ease;

//   @media (max-width: 768px) {
//     height: 180px;
//     font-size: 40px;
//   }

//   @media (max-width: 480px) {
//     height: 120px;
//     font-size: 36px;
//   }
// `;

// const BoxContent = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const BoxName = styled.div`
//   font-size: 16px;
//   font-weight: 700;
//   color: #1a1a1a;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }

//   @media (max-width: 480px) {
//     font-size: 13px;
//   }
// `;

// const BoxDescription = styled.div`
//   font-size: 12px;
//   color: #666;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 11px;
//   }

//   @media (max-width: 480px) {
//     font-size: 10px;
//   }
// `;

export default Home;
