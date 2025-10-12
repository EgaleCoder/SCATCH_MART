import React from "react";
import API from "../utils/axios";
import styled from "styled-components";
import Navigation from "../Components/Home/ShowProduct/Navigation";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import { useCartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";
import Loader from "../Components/Home/ShowProduct/CardLoader";
import Pay from "../Components/Home/Buttons/Pay";
import { formatPrice } from "../utils/priceFormat";
import { toast } from "react-toastify";

export default function Cart() {
  const { cart, loading, getCartData } = useCartContext();
  if (loading)
    return (
      <LoadingContainer>
        <Loader />
      </LoadingContainer>
    );

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const totalDiscount = cart.reduce(
    (acc, item) =>
      acc + item.product.price * item.quantity * (item.product.discount / 100),
    0
  );
  const vat = subtotal * 0.1;
  const total = subtotal + vat - totalDiscount;

  const handleRemoveItem = async (productId, productName) => {
    try {
      const res = await API.post("/api/cart/delete", {
        productId,
      });
      getCartData();
      toast.success(`${productName} removed from your cart.`);
      return res;
    } catch (err) {
      toast.error("Couldn't remove that item. Please try again.");
      return err;
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
            <EmptyState>Your cart is empty.</EmptyState>
          ) : (
            cart.map((item) => (
              <CartList key={item._id}>
                <CartItem>
                  <CartItemImage
                    src={item.product.image[0]}
                    alt={item.product.name}
                  />
                  <ItemDetails>
                    <ItemTitle>{item.product.name}</ItemTitle>
                    <ItemMeta>
                      Size: {item.product.size.type} | Price:
                      {formatPrice(item.product.price)}
                    </ItemMeta>
                  </ItemDetails>
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
              <BillCard>
                <BillList>
                  <BillRow>
                    <dt>Subtotal</dt>
                    <dd>{formatPrice(Number(subtotal.toFixed(2)))}</dd>
                  </BillRow>
                  <BillRow>
                    <dt>VAT (10%)</dt>
                    <dd>{formatPrice(Number(vat.toFixed(2)))}</dd>
                  </BillRow>
                  <BillRow>
                    <dt>Discount</dt>
                    <dd>-{formatPrice(Number(totalDiscount.toFixed(2)))}</dd>
                  </BillRow>
                  <BillTotalRow>
                    <dt>Total</dt>
                    <dd>{formatPrice(Number(total.toFixed(2)))}</dd>
                  </BillTotalRow>
                </BillList>

                <DiscountBadge>
                  <DiscountIcon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </DiscountIcon>
                  <DiscountText>2 Discounts Applied</DiscountText>
                </DiscountBadge>

                <CheckoutContainer>
                  <NavLink to={"/"}>
                    <Pay />
                  </NavLink>
                </CheckoutContainer>
              </BillCard>
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

const EmptyState = styled.p`
  text-align: center;
  color: #718096;
  font-size: 1.25rem;
  height: 50vh;
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
