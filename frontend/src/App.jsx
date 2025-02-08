import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Barkpack from "./pages/Barkpack";
import Home from "./pages/Home";
import ScrollToTop from "./components/Scrolltotop";

const App = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/barkpack" element={<Barkpack />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
