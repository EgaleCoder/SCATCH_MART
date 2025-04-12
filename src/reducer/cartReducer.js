const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_ERROR":
      return { ...state, loading: false, error: true };
    case "ADD_TO_CART":
      return { ...state, cart: action.payload };
    case "SET_CART_DATA":
      return { ...state, cart: action.payload, loading: false };
    default:
      return state;
  }
};

export default cartReducer;
