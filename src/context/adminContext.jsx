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
  const {
    adminLogin,
    adminLogout,
    adminPanel,
    adminDeleteUser,
    adminAddProduct,
    adminDeleteProduct,
  } = useAdminAuth(dispatch);

  useEffect(() => {
    adminPanel();
  }, [adminPanel]);

  return (
    <AdminContext.Provider
      value={{
        ...state,
        adminLogin,
        adminLogout,
        adminPanel,
        adminDeleteUser,
        adminAddProduct,
        adminDeleteProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
