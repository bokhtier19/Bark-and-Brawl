import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { AnimationProvider } from "./context/AnimationContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
    <HashRouter>
        <AnimationProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </AnimationProvider>
    </HashRouter>,
);
