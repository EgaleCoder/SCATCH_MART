import React, { useEffect, useState } from "react";
import API from "../utils/axios";
import styled from "styled-components";
import Navigation from "../Components/Home/ShowProduct/Navigation";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import { useCartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";
import Loader from "../Components/Home/ShowProduct/CardLoader";
import { CartSkeleton } from "../Components/Common/SkeletonLoader";
import { formatPrice } from "../utils/priceFormat";
import { toast } from "react-toastify";
import PlaceOrderButton from "../Components/Home/Buttons/placeOrderButton";

export default function Cart() {
  const { cart, loading, getCartData } = useCartContext();
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    let timer;
    if (loading) {
      setShowSkeleton(false);
      timer = setTimeout(() => setShowSkeleton(true), 1200);
    } else {
      setShowSkeleton(false);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [loading]);

  if (loading)
    return (
      <LoadingContainer>
        {!showSkeleton ? <Loader /> : <CartSkeleton />}
      </LoadingContainer>
    );

  useEffect(() => {
    getCartData();
  }, [getCartData]);

  const handleRemoveItem = async (productId, productName) => {
    try {
      await API.post("/api/cart/delete", {
        productId,
      });
      toast.success(`${productName} removed from your cart.`);
      getCartData();
    } catch (err) {
      toast.error("Couldn't remove that item. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <Navigation />
      <CartSection>
        <CartContainer>
          <CartHeader>Your Cart</CartHeader>
          {cart.length === 0 ? (
            <EmptyState>
              <h2>Your cart is empty. Add items to get started!</h2>
              <NavLink to="/">
                <ButtonLink>Add Items to your cart</ButtonLink>
              </NavLink>
            </EmptyState>
          ) : (
            cart.map((item) => (

              <CartList key={item._id} >
                <CartItem>

                  <CartItemImage
                    src={item.product.image[0]}
                    alt={item.product.name}
                  />
                  <NavLink to={`/product/${item.product._id}`} >
                    <ItemDetails>
                      <ItemTitle>{item.product.name}</ItemTitle>
                      <ItemMeta>
                        Size: {item.product.size.type} | Price:
                        {formatPrice(item.product.price - item.product.price * (item.product.discount / 100))} | Show more...
                      </ItemMeta>
                    </ItemDetails>
                  </NavLink>
                  <PriceDetails>
                    <QuantityLabel>(Quantity)</QuantityLabel>
                    <QuantityValue>{item.quantity}</QuantityValue>
                    <RemoveButton
                      type="button"
                      onClick={() => {
                        handleRemoveItem(item.product._id, item.product.name);
                      }}
                    >
                      {loading ? "Removing..." : "Remove"}
                    </RemoveButton>
                  </PriceDetails>
                </CartItem>
              </CartList>
            ))
          )}
          {cart.length > 0 && (
            <SummaryWrapper>
              <NavLink to="/make-order">
                <PlaceOrderButton />
              </NavLink>
            </SummaryWrapper>
          )}
        </CartContainer>
      </CartSection>
      <Footer />
    </>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CartSection = styled.section``;

const CartContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px;
`;

const CartHeader = styled.header`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #1a202c;
`;

const EmptyState = styled.div`
  text-align: center;
  color: #718096;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.25rem;
  height: 40vh;
`;

const CartList = styled.div`
  background-color: rgb(226, 231, 235);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: contain;
  border: 1px solid #e2e8f0;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

const ItemMeta = styled.p`
  margin: 0;
  color: #4a5568;
  font-size: 0.9rem;
`;

const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  margin-left: auto;
`;

const QuantityLabel = styled.span`
  font-size: 0.875rem;
  color: #4b5563;
`;

const QuantityValue = styled.p`
  margin: 0;
  margin-right: 1.75rem;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const RemoveButton = styled.button`
  background-color: #e53e3e;
  color: #ffffff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c53030;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`;

const SummaryWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e5e7eb;
  padding-top: 2rem;
`;

const BillCard = styled.div`
  width: 100%;
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  background-color: #e5e7eb;
  border-radius: 0.5rem;
`;

const BillList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #374151;
  font-size: 0.875rem;
  margin: 0;
`;

const BillRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BillTotalRow = styled(BillRow)`
  font-size: 1rem;
  font-weight: 600;
`;

const DiscountBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  background-color: #e0e7ff;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  color: #4338ca;
  font-size: 0.75rem;
  align-self: flex-end;
`;

const DiscountIcon = styled.svg`
  width: 1rem;
  height: 1rem;
`;

const DiscountText = styled.p`
  margin: 0;
`;

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonLink = styled.button`
  background-color: #4338ca;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3730a3;
  }
`;

