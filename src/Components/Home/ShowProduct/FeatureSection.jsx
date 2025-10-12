import React from "react";
import styled from "styled-components";

const features = [
  {
    icon: "🛍️", // Replace with actual icons
    text: "Lowest Price",
  },
  {
    icon: "💰", // Replace with actual icons
    text: "Cash on Delivery",
  },
  {
    icon: "📦", // Replace with actual icons
    text: "7-day Returns",
  },
];

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`;

const FeatureIcon = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FeatureText = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
`;

export default function FeaturesSection() {
  return (
    <Container>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <FeatureIcon>{feature.icon}</FeatureIcon>
          <FeatureText>{feature.text}</FeatureText>
        </FeatureItem>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f7ff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;
