import { createContext, useEffect } from "react";
import React from "react";
import { useCartApi } from "../Hooks/useCartApi";
import { useContext } from "react";
import { useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  loading: false,
  error: false,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addToCart, getCartData } = useCartApi(dispatch);

  // In CartProvider component
  useEffect(() => {
    getCartData();
  }, []);

  return (
    <CartContext.Provider
      value={{ ...state, dispatch, addToCart, getCartData }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
