const orderReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true, error: null };

    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "SET_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };

    case "SET_CURRENT_STEP":
      return { ...state, currentStep: action.payload };

    case "NEXT_STEP":
      return { ...state, currentStep: Math.min(state.currentStep + 1, 3) };

    case "PREV_STEP":
      return { ...state, currentStep: Math.max(state.currentStep - 1, 1) };

    case "SET_ORDER_ID":
      return { ...state, orderId: action.payload };

    case "SHOW_SUCCESS_MODAL":
      return { ...state, showSuccessModal: true };

    case "HIDE_SUCCESS_MODAL":
      return { ...state, showSuccessModal: false };

    case "RESET_ORDER_FORM":
      return {
        ...state,
        currentStep: 1,
        showSuccessModal: false,
        orderId: '',
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

    case "FETCH_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: null
      };

    case "FETCH_ORDERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        orders: []
      };

    case "FETCH_ADMIN_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        adminOrders: action.payload,
        error: null
      };

    case "CLEAR_ADMIN_ORDERS":
      return {
        ...state,
        adminOrders: []
      };

    case "PLACE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        showSuccessModal: true,
        orderId: action.payload.orderId,
        orderData: action.payload.orderData,
        totalAmount: action.payload.totalAmount,
        totalQuantity: action.payload.totalQuantity,
        error: null
      };

    case "UPDATE_ORDER_STATUS_SUCCESS":
      return {
        ...state,
        loading: false,
        adminOrders: state.adminOrders.map(order =>
          (order._id === action.payload.orderId || order.id === action.payload.orderId)
            ? { ...order, status: action.payload.status, ...action.payload.updatedOrder }
            : order
        ),
        error: null
      };

    case "UPDATE_ORDER_STATUS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default orderReducer;
