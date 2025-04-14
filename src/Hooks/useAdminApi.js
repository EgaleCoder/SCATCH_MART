import { useCallback } from "react";
import API from "../utils/axios";

const LOGIN_API = "/api/owners/admin/login";

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
        console.log("Login Success", res);
        dispatch({ type: "LOGIN", payload: res?.data });
      } catch (error) {
        console.log("Login Fail", error?.response?.data?.message || error.message);
        dispatch({ type: "SET_ERROR", payload: error?.response?.data?.message || "Something went wrong" });
      }
    },
    [dispatch]
  );
  return { adminLogin };
};

export default useAdminAuth;
