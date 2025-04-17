import { useCallback } from "react";
import API from "../utils/axios";

const LOGIN_API = "/api/owners/admin/login";
const LOGOUT_API = "/api/owners/admin/logout";
const ADMIN_PANEL_API = "/api/owners/admin/panel";
const ADMIN_DELETE_USER_API = "/api/owners/admin/delete-user";
const ADMIN_ADD_PRODUCT = "/api/products/create";
const ADMIN_DELETE_PRODUCT = "/api/owners/delete-product";

const useAdminAuth = (dispatch) => {
  const adminLogin = useCallback(
    async (email, password) => {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await API.post(
          LOGIN_API,
          { email, password },
          { withCredentials: true }
        );
        dispatch({ type: "LOGIN", payload: res?.data });
        adminPanel();
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: error?.response?.data?.message || "Something went wrong",
        });
      }
    },
    [dispatch]
  );

  const adminLogout = useCallback(async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await API.post(LOGOUT_API, {}, { withCredentials: true });
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error?.response?.data?.message });
    }
  }, [dispatch]);

  const adminPanel = useCallback(async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await API.get(ADMIN_PANEL_API, { withCredentials: true });
      dispatch({ type: "SET_ADMIN", payload: res?.data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, [dispatch]);

  const adminDeleteUser = useCallback(
    async (userId) => {
      const URL = `${ADMIN_DELETE_USER_API}/${userId}`;
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await API.delete(URL, { withCredentials: true });
        dispatch({ type: "USER_DELETED", payload: res?.data });
        adminPanel();
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error?.message });
      }
    },
    [dispatch]
  );

  const adminAddProduct = useCallback(
    async (product) => {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await API.post(ADMIN_ADD_PRODUCT, product, {
          withCredentials: true,
        });
        dispatch({ type: "SET_PRODUCT", payload: res?.data });
        console.log("Api Call", res);
        adminPanel();
      } catch (error) {
        console.log("Api Call", error.message);
        dispatch({ type: "SET_ERROR", payload: error?.message });
      }
    },
    [dispatch]
  );

  const adminDeleteProduct = useCallback(
    async (productId) => {
      const URL = `${ADMIN_DELETE_PRODUCT}/${productId}`;
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await API.delete(URL, { withCredentials: true });
        dispatch({ type: "PRODUCT_DELETED", payload: res?.data });
        adminPanel();
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error?.data?.message });
      }
    },
    [dispatch]
  );

  return {
    adminLogin,
    adminLogout,
    adminPanel,
    adminDeleteUser,
    adminAddProduct,
    adminDeleteProduct,
  };
};

export default useAdminAuth;
