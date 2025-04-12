const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "CREATE_USER_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "CREATE_USER_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_USER_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "DELETE_USER_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
