import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./Components/Home/ShowProduct/CardLoader";
import { ProtectedRoute, AdminRoute } from "./Routes/ProtectedRoutes";
import ShowProducts from "./Components/Admin/ShowProducts";
import AdminDetails from "./Components/Admin/AdminDetails";

// Lazy loaded components
const Home = lazy(() => import("./Pages/Home"));
const Dasshboard = lazy(() => import("./Components/Admin/Home"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails"));
const Signin = lazy(() => import("./Pages/Signin"));
const Login = lazy(() => import("./Pages/Login"));
const Cart = lazy(() => import("./Pages/Cart"));
const AdminLogin = lazy(() => import("./Pages/AdminLogin"));
const Profile = lazy(() => import("./Components/Home/Profile"));
const AdminPanel = lazy(() => import("./Components/Admin/AdminPanel"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const ActiveUser = lazy(() => import("./Components/Admin/ActiveUser"));
const AddProduct = lazy(() => import("./Components/Admin/AddProduct"));
const MakeOrder = lazy(() => import("./Pages/makeOrder"));
const ForgotPasswordForm = lazy(() => import("./Pages/ForgetPassword"));


function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/make-order" element={<MakeOrder />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminPanel />
                </AdminRoute>
              }
            >
              <Route index element={<Dasshboard />} />
              <Route path="activeuser" element={<ActiveUser />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="showproducts" element={<ShowProducts />} />
              <Route path="admin-details" element={<AdminDetails />} />
            </Route>

            {/* Protected Routes */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
