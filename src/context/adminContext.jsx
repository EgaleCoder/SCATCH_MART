import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/adminReducer";
import useAdminAuth from "../Hooks/useAdminApi";

export const AdminContext = createContext();

const initialState = {
  isAdminLoggedIn: false,
  admin: null,
  loading: false,
  error: null,
};

export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { adminLogin } = useAdminAuth(dispatch);

  return (
    <AdminContext.Provider value={{ ...state, adminLogin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
