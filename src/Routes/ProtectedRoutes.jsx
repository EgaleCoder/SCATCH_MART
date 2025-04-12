import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import Loader from "../Components/Home/ShowProduct/CardLoader";

const ProtectedRoute = ({ children }) => {
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

export default ProtectedRoute;
