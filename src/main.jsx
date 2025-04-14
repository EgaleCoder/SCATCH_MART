import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/productContext.jsx";
import { FilterProvider } from "./context/fillterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import { AdminProvider } from "./context/adminContext.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <AdminProvider>
      <AuthProvider>
        <AppProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </AppProvider>
      </AuthProvider>
    </AdminProvider>
  </ErrorBoundary>
);
