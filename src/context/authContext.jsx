import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/authReducer";
import useAuthApi from "../Hooks/useAuthApi";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  otpSent: false,
  isOtpVerified: false,
  isPasswordReset: false,
  otpData: null
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loginUser, checkUser, logoutUser, createUser, deleteUser, sendOtp, verifyOtp, resetPassword } =
    useAuthApi(dispatch);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
        logoutUser,
        checkUser,
        createUser,
        deleteUser,
        loginUser,
        sendOtp,
        verifyOtp,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
