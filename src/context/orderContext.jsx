import { createContext, useEffect } from "react";
import { useOrderApi } from "../Hooks/useOrderApi";
import { useContext } from "react";
import { useReducer } from "react";
import reducer from "../reducer/orderReducer";

const OrderContext = createContext();

const initialState = {
  orderData: null,
  totalAmount: 0,
  totalQuantity: 0,
  currentStep: 1,
  showSuccessModal: false,
  orderId: '',
  loading: false,
  error: null,
  orders: [],
  adminOrders: [],
  formData: {
    fullName: '',
    phone: '',
    addressLine: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    paymentMethod: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  }
};

const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { placeOrder, fetchUserOrders, fetchAllOrdersForAdmin, updateOrderStatus, cancelOrder } = useOrderApi(dispatch);

  return (
    <OrderContext.Provider
      value={{
        ...state,
        dispatch,
        placeOrder,
        cancelOrder,
        fetchUserOrders,
        fetchAllOrdersForAdmin,
        updateOrderStatus,
        // Additional helper functions
        nextStep: () => dispatch({ type: "NEXT_STEP" }),
        prevStep: () => dispatch({ type: "PREV_STEP" }),
        resetOrder: () => dispatch({ type: "RESET_ORDER_FORM" }),
        hideSuccessModal: () => dispatch({ type: "HIDE_SUCCESS_MODAL" }),
        clearAdminOrders: () => dispatch({ type: "CLEAR_ADMIN_ORDERS" }),
        clearUserOrders: () => dispatch({ type: "CLEAR_USER_ORDERS" })
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const useOrderContext = () => {
  return useContext(OrderContext);
};

export { OrderProvider, useOrderContext };
