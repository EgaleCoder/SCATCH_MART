import { useCallback } from "react";
import API from '../utils/axios'

const API_PROFILE = "/api/users/profile";
const API_LOGOUT = "/api/users/logout";

const useAuthApi = (dispatch) => {
  const userLogin = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: null });

      const res = await API.get(API_PROFILE, {
        withCredentials: true,
      });

      dispatch({ type: "LOGIN", payload: res.data.user });
    } catch (err) {
      dispatch({ type: "LOGOUT" });
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.message || "Something went wrong!",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [dispatch]);

  const logoutUser = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: null });

      await API.post(API_LOGOUT, {}, { withCredentials: true });
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.message || "Logout failed!",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [dispatch]);

  return { userLogin, logoutUser };
};

export default useAuthApi;
