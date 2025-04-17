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

export default function Cart() {
  const { cart, loading, getCartData } = useCartContext();
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
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

  const handleRemoveItem = async (productId) => {
    try {
      const res = await API.post("/api/cart/delete", {
        productId,
      });
      getCartData();
      return res;
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <Navbar />
      <Navigation />
      <Section>
        <div className="container">
          <header className="header">Your Cart</header>
          {cart.length === 0 ? (
            <p className="empty">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-list" key={item._id}>
                <div className="cart-item">
                  <img src={item.product.image[0]} alt={item.product.name} />
                  <div className="item-details">
                    <h3>{item.product.name}</h3>
                    <p>
                      Size: {item.product.size.type} | Price: ₹
                      {item.product.price}
                    </p>
                  </div>
                  <div className="price-details">
                    <span>(Quantity)</span>
                    <p className="mr-7">{item.quantity}</p>
                    <button
                      className="remove-btn"
                      onClick={() => {
                        handleRemoveItem(item.product._id);
                      }}
                    >
                      {loading ? "Removing..." : "Remove"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {cart.length > 0 && (
            <Wrapper>
              <div className="bill bg-gray-200 rounded">
                <dl>
                  <div className="row">
                    <dt>Subtotal</dt>
                    <dd>₹{subtotal.toFixed(2)}</dd>
                  </div>
                  <div className="row">
                    <dt>VAT (10%)</dt>
                    <dd>₹{vat.toFixed(2)}</dd>
                  </div>
                  <div className="row">
                    <dt>Discount</dt>
                    <dd>-₹{totalDiscount.toFixed(2)}</dd>
                  </div>
                  <div className="row total">
                    <dt>Total</dt>
                    <dd>₹{total.toFixed(2)}</dd>
                  </div>
                </dl>

                <div className="discount-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                  <p>2 Discounts Applied</p>
                </div>

                <div className="checkout">
                  <NavLink to={"/"}>
                    <Pay />
                  </NavLink>
                </div>
              </div>
            </Wrapper>
          )}
        </div>
      </Section>
      <Footer />
    </>
  );
}

const Section = styled.section`
  .container {
    max-width: 1200px;
    margin: auto;
    padding: 50px 20px;
  }
  .header {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #1a202c;
  }
  .empty {
    text-align: center;
    color: #718096;
    font-size: 1.25rem;
    height: 50vh;
  }
  .cart-list {
    background-color: rgb(226, 231, 235);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  .cart-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .cart-item img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: contain;
    border: 1px solid #e2e8f0;
  }
  .item-details h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .item-details p {
    color: #4a5568;
    font-size: 0.9rem;
  }
  .price-details {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    margin-left: auto;
  }
  .price-details input {
    width: 60px;
    padding: 0.3rem;
    border: 1px solid #cbd5e0;
    border-radius: 4px;
    text-align: center;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    .price-details input {
      width: 50px;
      padding: 0.25rem;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .price-details input {
      width: 100%;
      max-width: 120px;
      font-size: 0.75rem;
      padding: 0.4rem;
    }
  }

  /* Responsive Remove Button */
  .remove-btn {
    background-color: #e53e3e;
    color: white;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .remove-btn:hover {
    background-color: #c53030;
  }

  @media (max-width: 768px) {
    .remove-btn {
      padding: 0.3rem 0.6rem;
      font-size: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .remove-btn {
      width: 100%;
      text-align: center;
      padding: 0.5rem;
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e5e7eb;
  padding-top: 2rem;

  .bill {
    width: 100%;
    max-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 20px;
  }

  dl {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #374151;
    font-size: 0.875rem;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .total {
    font-size: 1rem;
    font-weight: 600;
  }

  .discount-badge {
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
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }

  .checkout {
    display: flex;
    justify-content: flex-end;
  }
`;
