import { useCallback } from "react";
import API from "../utils/axios";

const LOGIN_API = "/api/owners/admin/login";
const LOGOUT_API = "/api/owners/admin/logout";
const ADMIN_PANEL_API = "/api/owners/admin/panel";

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

  return { adminLogin, adminLogout, adminPanel };
};

export default useAdminAuth;
