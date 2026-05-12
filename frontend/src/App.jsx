import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Barkpack from "./pages/Barkpack";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop.jsx";

function AppRoutes() {
    const location = useLocation();
    const pathKey = location.pathname.split("/")[1] || "home";

    return (
        <div className="min-h-screen bg-paper font-sans text-ink antialiased">
            <ScrollToTop />
            <Navbar />
            <main key={pathKey} className="motion-safe:animate-fade-in motion-reduce:animate-none">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/barkpack" element={<Barkpack />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default function App() {
    return <AppRoutes />;
}
