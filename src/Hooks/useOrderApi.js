import { useCallback } from "react";
import API from "../utils/axios";

const API_PLACE_ORDER = "/api/orders/place-order";
const API_GET_USER_ORDER = "/api/orders/my-orders";

export const useOrderApi = (dispatch) => {
  const placeOrder = useCallback(
    async (orderData, cart) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const subtotal = cart.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
        const totalDiscount = cart.reduce(
          (acc, item) =>
            acc + item.product.price * item.quantity * (item.product.discount / 100),
          0
        );
        const shipping = 10; 
        const totalAmount = subtotal + shipping - totalDiscount;

        const completeOrderData = {

          shippingAddress: {
            fullName: orderData.fullName,
            phone: orderData.phone,
            addressLine: orderData.addressLine,
            city: orderData.city,
            state: orderData.state,
            postalCode: orderData.postalCode,
            country: orderData.country
          },

          paymentMethod: orderData.paymentMethod,
          ...(orderData.paymentMethod === 'Card' && {
            paymentDetails: {
              cardNumber: orderData.cardNumber,
              cardName: orderData.cardName,
              expiryDate: orderData.expiryDate,
              cvv: orderData.cvv
            }
          }),

          items: cart.map(item => ({
            productId: item.product._id || item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            discount: item.product.discount || 0,
            image: item.product.image
          })),
          subtotal,
          totalDiscount,
          shipping,
          totalAmount,
          totalQuantity: cart.reduce((acc, item) => acc + item.quantity, 0)
        };

        const res = await API.post(
          API_PLACE_ORDER,
          completeOrderData,
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

  const fetchUserOrders = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await API.get(API_GET_USER_ORDER, {
        withCredentials: true,
      });
      // console.log("API User orders", res);

      dispatch({
        type: "FETCH_ORDERS_SUCCESS",
        payload: res.data.orders || [],
      });

      return { success: true, orders: res.data.orders || [] };
    } catch (err) {
      const error = err.response?.data?.message || err.message;
      dispatch({ type: "FETCH_ORDERS_FAILURE", payload: error });
      return { success: false, error };
    }
  }, [dispatch]);

  return { placeOrder, fetchUserOrders };
};
