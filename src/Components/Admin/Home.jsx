import React from "react";
import styled from "styled-components";
import { FaShoppingCart,FaUsers , FaBox  } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1 1 250px;
  background: ${({ bg }) => bg};
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  min-width: 220px;
`;

const IconBackground = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  font-size: 5rem;
  opacity: 0.1;
`;

const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Number = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const Subtext = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
`;

const DualNumber = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const PatientLabel = styled.div`
  font-size: 0.8rem;
`;

const Home = () => {
  return (
    <Container>
      <Card bg="linear-gradient(to right, #f7971e, #ffd200)">
        <Title>Doctors Available</Title>
        <Number>140</Number>
        <Subtext>For Next Three hours</Subtext>
        <IconBackground>
        <FaUsers />
        </IconBackground>
      </Card>

      <Card bg="linear-gradient(to right, #00c6ff, #0072ff)">
        <Title>Bed Occupancy</Title>
        <Number>627</Number>
        <Subtext>As of Today’s Report</Subtext>
        <IconBackground>
        <FaShoppingCart />
        </IconBackground>
      </Card>

      <Card bg="linear-gradient(to right, #00b09b, #96c93d)">
        <Title>Patient Details</Title>
        <DualNumber>
          <div>
            122
            <PatientLabel>In Patients</PatientLabel>
          </div>
          <div>
            023
            <PatientLabel>Out Patients</PatientLabel>
          </div>
        </DualNumber>
        <IconBackground>
        <FaBox />
        </IconBackground>
      </Card>
    </Container>
  );
};

export default Home;
