const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_PRODUCTS":
      return { ...state, isLoading: false, products: action.payload };
    case "SET_ERROR":
      return { ...state, isLoading: false, isError: true };
    case "SET_SINGLE_LOADING":
      return { ...state, isSingleLoading: true };
    case "SET_PRODUCT_DETAILS":
      return {
        ...state,
        isSingleLoading: false,
        productDetails: action.payload,
      };
    case "SET_PRODUCT_SIZE":
      return { ...state, isSingleLoading: false, productSize: action.payload };
    default:
      return state;
  }
};

export default productReducer;
