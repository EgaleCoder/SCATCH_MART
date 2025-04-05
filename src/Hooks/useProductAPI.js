import { useCallback } from "react";
import axios from "axios";

const API = "/api/scatch-products";

const useProductApi = (dispatch) => {
  const getProducts = useCallback(async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(API);
      dispatch({ type: "SET_PRODUCTS", payload: response.data.products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  }, [dispatch]);

  const getSingleProduct = useCallback(
    async (productId) => {
      dispatch({ type: "SET_SINGLE_LOADING" });
      try {
        const response = await axios.get(`${API}/${productId}`);
        dispatch({
          type: "SET_PRODUCT_DETAILS",
          payload: response.data.product,
        });
        dispatch({
          type: "SET_PRODUCT_SIZE",
          payload: response.data.product.size,
        });
      } catch (error) {
        dispatch({ type: "SET_ERROR" });
      }
    },
    [dispatch]
  );

  return { getProducts, getSingleProduct };
};

export default useProductApi;
