import { useCallback } from "react";
import API from "../utils/axios";

const API_LOGIN_USER = "/api/users/login";
const API_PROFILE = "/api/users/profile";
const API_LOGOUT = "/api/users/logout";
const API_CREATE_USER = "api/users/create";
const API_DELETE_USER = "/api/users/delete-user";
const API_SEND_OTP = "/api/users/send-otp";
const API_VERIFY_OTP = "/api/users/verify-otp";
const API_RESET_PASSWORD = "/api/users/reset-password";

const useAuthApi = (dispatch) => {
  const loginUser = useCallback(
    async (email, password) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const res = await API.post(
          API_LOGIN_USER,
          { email, password },
          { withCredentials: true }
        );
        checkUser();
        dispatch({ type: "LOGIN", payload: res.data });
        return { success: true };
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: error.response?.data?.message || "Something went wrong!",
        });
        return { success: false, error: error.response?.data?.message };
      }
    },
    [dispatch]
  );

  const checkUser = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
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
      await API.post(API_LOGOUT, {}, { withCredentials: true });
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.message || "Logout failed!",
      });
    }
  }, [dispatch]);

  const createUser = useCallback(
    async (formData) => {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await API.post(API_CREATE_USER, formData, {
          withCredentials: true,
        });
        dispatch({ type: "CREATE_USER_SUCCESS", payload: res.data });
        return { success: true, user: res.data.user };
      } catch (err) {
        dispatch({
          type: "CREATE_USER_FAIL",
          payload: err.response?.data?.message || "Registration failed",
        });
        return { success: false, error: err.response?.data?.message };
      }
    },
    [dispatch]
  );

  const deleteUser = useCallback(
    async (userId) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const URL = `${API_DELETE_USER}/${userId}`;
        const result = await API.delete(URL, {
          withCredentials: true,
        });
        dispatch({ type: "DELETE_USER_SUCCESS", payload: result.data });
        return { success: true, user: result.data.user };
      } catch (err) {
        dispatch({
          type: "DELETE_USER_FAIL",
          payload: err.response?.data?.message,
        });
        return { success: false, error: err.response?.data?.message };
      }
    },
    [dispatch]
  );

  const sendOtp = useCallback(
    async (email) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const res = await API.post(API_SEND_OTP, { email }, { withCredentials: true });
        dispatch({ type: "SEND_OTP_SUCCESS", payload: res.data });
        return { success: true, message: res.data.message };
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: error.response?.data?.message || "Failed to send OTP!",
        });
        return { success: false, error: error.response?.data?.message };
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch]
  );

  const verifyOtp = useCallback(
    async (email, otp) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const res = await API.post(API_VERIFY_OTP, { email, otp }, { withCredentials: true });
        dispatch({ type: "VERIFY_OTP_SUCCESS", payload: res.data });
        return { success: true, message: res.data.message };
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: error.response?.data?.message || "Invalid OTP!",
        });
        return { success: false, error: error.response?.data?.message };
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch]
  );

  const resetPassword = useCallback(
    async (newPassword) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const res = await API.post(API_RESET_PASSWORD, { newPassword }, { withCredentials: true });
        dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: res.data });
        return { success: true, message: res.data.message };
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: error.response?.data?.message || "Failed to reset password!",
        });
        return { success: false, error: error.response?.data?.message };
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch]
  );

  return { loginUser, checkUser, logoutUser, createUser, deleteUser, sendOtp, verifyOtp, resetPassword };
};

export default useAuthApi;
