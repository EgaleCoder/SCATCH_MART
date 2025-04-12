import { useCallback } from "react";
import API from "../utils/axios";

const API_ADD_TO_CART = "/api/addtocart";
const API_GET_CART = "/api/cart";

export const useCartApi = (dispatch) => {
  const addToCart = useCallback(
    async (productId, quantity = 1) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const res = await API.post(
          API_ADD_TO_CART,
          { productId, quantity },
          { withCredentials: true }
        );
        dispatch({
          type: "ADD_TO_CART",
          payload: res.data,
        });
        return { success: true };
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err });
        return { success: false, error: err.response?.data?.message };
      } finally {
        getCartData();
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch]
  );

  const getCartData = useCallback(async () => {
    dispatch({ type: "CART_LOADING" });
    try {
      const res = await API.get(API_GET_CART, {
        withCredentials: true,
      });
      dispatch({ type: "SET_CART_DATA", payload: res.data.cart });
    } catch (error) {
      dispatch({ type: "CART_ERROR", payload: error });
    }
  });

  return { addToCart, getCartData };
};
