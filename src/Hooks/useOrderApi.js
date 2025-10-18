import { useCallback } from "react";
import API from "../utils/axios";

const API_PLACE_ORDER = "/api/orders/place-order";

export const useOrderApi = (dispatch) => {
  const placeOrder = useCallback(
    async (orderData) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const res = await API.post(
          API_PLACE_ORDER,
          orderData,
          { withCredentials: true }
        );

        // Generate order ID (in a real app, this would come from the backend)
        const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();

        dispatch({
          type: "PLACE_ORDER_SUCCESS",
          payload: {
            orderId,
            orderData: res.data,
            totalAmount: res.data.newOrder.totalAmount,
            totalQuantity: res.data.newOrder.totalQuantity,
          }
        });

        // console.log("Order placed successfully:", res);
        return { success: true, orderId, orderData: res.data, totalAmount: res.data.newOrder.totalAmount, totalQuantity: res.data.newOrder.totalQuantity };
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.response?.data?.message || err.message });
        return { success: false, error: err.response?.data?.message || err.message };
      }
    },
    [dispatch]
  );

  return { placeOrder };
};
