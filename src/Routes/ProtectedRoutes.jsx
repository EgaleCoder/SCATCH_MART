import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useAdminContext } from "../context/adminContext";
import Loader from "../Components/Home/ShowProduct/CardLoader";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuthContext();

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  if (!isAuthenticated) return <Navigate to="/signup" replace />;

  return children;
};

export const AdminRoute = ({ children }) => {
  const { isAdminLoggedIn, loading } = useAdminContext();

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  if (!isAdminLoggedIn) return <Navigate to="/admin-login" replace />;

  return children;
};
