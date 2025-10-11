import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <StyledWrapper>
        <ContentContainer>
          <TextColumn>
            <ErrorHeading>404</ErrorHeading>
            <ErrorDescription>
              Sorry, we couldn't find the page you're looking for.
            </ErrorDescription>
            <HomeLink to="/">Back to Homepage</HomeLink>
          </TextColumn>

          <ImageColumn>
            <NotFoundImage
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              alt="Page not found"
            />
          </ImageColumn>
        </ContentContainer>
      </StyledWrapper>
    </>
  );
};

export default NotFoundPage;

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  color: #374151;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 1.25rem;
  }
`;

const TextColumn = styled.div`
  width: 100%;
  max-width: 32rem;
  text-align: center;
  margin-inline: auto;

  @media (min-width: 768px) {
    text-align: left;
    margin-inline: 0;
  }
`;

const ErrorHeading = styled.h1`
  font-size: 3.75rem;
  font-weight: 800;
  color: #60a5fa;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 4.5rem;
  }
`;

const ErrorDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 300;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const HomeLink = styled(NavLink)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #60a5fa;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.4);
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #3b82f6;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #ef4444;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
  }
`;

const ImageColumn = styled.div`
  width: 100%;
  max-width: 32rem;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

const NotFoundImage = styled.img`
  width: 100%;
  max-width: 28rem;

  @media (min-width: 640px) {
    max-width: 32rem;
  }

  @media (min-width: 768px) {
    max-width: 36rem;
  }

  @media (min-width: 1024px) {
    max-width: 40rem;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
