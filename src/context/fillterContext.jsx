import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductsContext } from "./productContext";
import reducer from "../reducer/fillterReducer";

export const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  filter: { 
    text: "",
    category: "All" 
  },
};

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Only update filter values, do not dispatch FILTER_PRODUCTS here
  const updateFilterValue = (event) => {
    const { name, value } = event.target;

    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }
  }, [products]);
  

  // Apply filtering when filters change
  useEffect(() => {
    if (state.allProducts.length > 0) { //Prevent running on empty state
      dispatch({ type: "FILTER_PRODUCTS" });
    }
  }, [state.filter]);

  return (
    <FilterContext.Provider value={{ ...state, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
