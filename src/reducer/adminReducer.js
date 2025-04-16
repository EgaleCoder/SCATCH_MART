const adminReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true, error: false };
    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "LOGIN":
      return {
        ...state,
        admin: action.payload,
        isAdminLoggedIn: true,
        loading: false,
      };
    case "SET_ADMIN":
      return {
        ...state,
        admin: action.payload,
        isAdminLoggedIn: true,
        loading: false,
      };
    case "SET_PRODUCT":
      return { ...state, admin: action.payload, loading: false };
    case "USER_DELETED":
      return { ...state, admin: action.payload, loading: false };
    case "PRODUCT_DELETED":
      return { ...state, admin: action.payload, loading: false };
    case "LOGOUT":
      return { ...state, isAdminLoggedIn: false, loading: false };
    default:
      return state;
  }
};

export default adminReducer;
