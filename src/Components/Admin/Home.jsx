import React from "react";
import styled from "styled-components";
import { FaShoppingCart, FaUsers, FaBox } from "react-icons/fa";
import { useAdminContext } from "../../context/adminContext";
import Loader from "../Home/ShowProduct/CardLoader";

const Home = () => {
  const { admin, loading } = useAdminContext();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  const { adminDetails, orders, users, products } = admin;
  return (
    <>
      <p>Hello {adminDetails.fullname}!</p>
      <Container>
        <Card $bg="linear-gradient(to right, #f7971e, #ffd200)">
          <Title>Users Available</Title>
          <Number>{users.length}</Number>
          <Subtext>For Next Three hours</Subtext>
          <IconBackground>
            <FaUsers />
          </IconBackground>
        </Card>

        <Card $bg="linear-gradient(to right, #00c6ff, #0072ff)">
          <Title>Orders</Title>
          <Number>{orders.length}</Number>
          <Subtext>As of Today’s Report</Subtext>
          <IconBackground>
            <FaShoppingCart />
          </IconBackground>
        </Card>

        <Card $bg="linear-gradient(to right, #00b09b, #96c93d)">
          <Title>Products </Title>
          <DualNumber>
            <div>
              {products.length}
              <PatientLabel>In Store</PatientLabel>
            </div>
            <div>
              023
              <PatientLabel>Out Store</PatientLabel>
            </div>
          </DualNumber>
          <IconBackground>
            <FaBox />
          </IconBackground>
        </Card>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1 1 250px;
  background: ${({ $bg }) => $bg};
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

export default Home;
