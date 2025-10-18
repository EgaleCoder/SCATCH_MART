import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/productContext.jsx";
import { FilterProvider } from "./context/fillterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import { AdminProvider } from "./context/adminContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrderProvider } from "./context/orderContext.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <AdminProvider>
      <AuthProvider>
        <AppProvider>
          <FilterProvider>
            <CartProvider>
              <OrderProvider>
              <>
                <App />
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  pauseOnHover
                  newestOnTop
                  closeOnClick
                  draggable
                  theme="colored"
                />
              </>
            </OrderProvider>
            </CartProvider>
          </FilterProvider>
        </AppProvider>
      </AuthProvider>
    </AdminProvider>
  </ErrorBoundary>
);
