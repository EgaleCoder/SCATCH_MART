import { createContext, useReducer, useContext } from "react";
import reducer from "../reducer/addToCartReducer";
export const CartContext = createContext();

const initialState = {
  cart: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { product } });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const updateQuantity = (id, newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: newQuantity },
    });
  };
  return (
    <CartContext.Provider value={{ ...state, AddToCart, removeFromCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
