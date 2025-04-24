import { useCallback } from "react";
import API from "../utils/axios";

const PRODUCT_API = "/api/scatch-products";

const useProductApi = (dispatch) => {
  const getProducts = useCallback(async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await API.get(PRODUCT_API);

      //Shuffle products after api call 
      const products = response.data.products;
      for (let i = products.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [products[i], products[j]] = [products[j], products[i]];
      }
      dispatch({ type: "SET_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  }, [dispatch]);

  const getSingleProduct = useCallback(
    async (productId) => {
      dispatch({ type: "SET_SINGLE_LOADING" });
      try {
        const response = await API.get(`${PRODUCT_API}/${productId}`);
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
