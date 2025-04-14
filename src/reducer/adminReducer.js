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
    default:
      return state;
  }
};

export default adminReducer;
