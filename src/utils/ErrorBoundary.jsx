import React from "react";
import styled from "styled-components";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledContainer>
          <div className="error-text">
            <p>Hmmm! Can't Reach....</p>
            <p>Something went wrong. Please try again later.</p>
          </div>
          <StyledWrapper>
            <div className="card">
              <img
                src="https://uiverse.io/astronaut.png"
                alt="error astronaut"
                className="image"
              />
            </div>
          </StyledWrapper>
        </StyledContainer>
      );
    }

    return this.props.children;
  }
}

// 💡 Center layout + responsive
const StyledContainer = styled.div`
  min-height: 100vh;
  background: black;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .error-text {
    margin-bottom: 2rem;
  }

  .error-text p {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  @media (max-width: 640px) {
    .error-text p {
      font-size: 1.2rem;
    }
  }
`;

// 💡 Animated astronaut image
const StyledWrapper = styled.div`
  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  .image {
    height: 60vh;
    max-width: 90vw;
    animation: spin 20s infinite linear;
    object-fit: contain;
  }

  @media (max-width: 640px) {
    .image {
      height: 40vh;
    }
  }
`;

export default ErrorBoundary;
