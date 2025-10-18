import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: white;
  color: black;
  text-align: center;
  width: 13rem; 
  height: 3.5rem; 
//   border-radius: 1rem; 
  font-size: 1.25rem; 
  font-weight: 600; 
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:hover .bgLayer {
    width: 184px; 
  }
`;

const BgLayer = styled.div`
  background-color: #571588;
  // border-radius: 0.75rem; 
  height: 3rem; 
  width: 25%; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0.25rem;
  top: 4px;
  z-index: 10;
  transition: width 0.5s;
`;

const Text = styled.p`
  transform: translateX(0.5rem); 
`;

const PlaceOrderButton = () => {
  return (
    <ButtonWrapper type="button">
      <BgLayer className="bgLayer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px"
        >
          <path
            d="M160 480h640a32 32 0 1 1 0 64H160a32 32 0 0 1 0-64z"
            fill="#000000"
          />
          <path
            d="m786.752 512-265.408 265.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L786.752 512z"
            fill="#000000"
          />
        </svg>
      </BgLayer>
      <Text>Place Order</Text>
    </ButtonWrapper>
  );
};

export default PlaceOrderButton;
