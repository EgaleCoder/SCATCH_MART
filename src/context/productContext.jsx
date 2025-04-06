import { createContext, useEffect } from "react";
import React from "react";
import useProductApi from "../Hooks/useProductAPI";
import { useContext } from "react";
import { useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  productDetails: {},
  productSize: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { getProducts, getSingleProduct } = useProductApi(dispatch);
  console.log("ENV:", import.meta.env.VITE_API_BASE_URL);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductsContext };
