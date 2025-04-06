import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/productContext.jsx";
import { FilterProvider } from "./context/fillterContext.jsx";
import { CartProvider } from "./context/addToCartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <FilterProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </FilterProvider>
  </AppProvider>
);
