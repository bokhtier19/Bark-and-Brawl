import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Menu01Icon from "../assets/menu_icon";
import Cancel01Icon from "../assets/cross_icon";
import { useCart } from "../hooks/useCart.js";

const linkBase = "transition-colors duration-200 hover:text-ink";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { totalQty } = useCart();

    const closeMobile = () => setMobileOpen(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-stone-200/90 bg-white/85 text-xs uppercase tracking-[0.2em] backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
                <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
                    <Link to="/" className="group outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" onClick={closeMobile}>
                        <motion.span
                            className="rubik-wet-paint-regular text-2xl tracking-widest text-ink transition-transform duration-300 group-hover:scale-[1.03]"
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 24 }}
                        >
                            BARK & BRAWL
                        </motion.span>
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex lg:gap-14" aria-label="Primary">
                        <NavLink end to="/" className={({ isActive }) => `${isActive ? "font-semibold text-ink" : "text-ink-muted"} ${linkBase}`}>
                            Home
                        </NavLink>
                        <NavLink to="/shop" className={({ isActive }) => `${isActive ? "font-semibold text-ink" : "text-ink-muted"} ${linkBase}`}>
                            Shop
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${isActive ? "font-semibold text-ink" : "text-ink-muted"} ${linkBase}`}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `${isActive ? "font-semibold text-ink" : "text-ink-muted"} ${linkBase}`}>
                            Contact
                        </NavLink>
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/barkpack"
                            className="hidden rounded-full border border-stone-200 bg-cream/80 px-4 py-2 text-[11px] font-semibold text-ink transition hover:border-accent/40 hover:bg-white md:inline-flex"
                            aria-label={`Barkpack cart, ${totalQty} items`}
                        >
                            Barkpack ({totalQty})
                        </Link>
                        <button
                            type="button"
                            className="rounded-lg p-2 text-ink outline-none ring-accent transition hover:bg-stone-100 focus-visible:ring-2 md:hidden"
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-nav"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMobileOpen((o) => !o)}
                        >
                            <Menu01Icon color="currentColor" className="size-6" />
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {mobileOpen ? (
                    <motion.div
                        id="mobile-nav"
                        className="fixed inset-0 z-[60] md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button type="button" className="absolute inset-0 bg-ink/40 backdrop-blur-sm" aria-label="Close menu" onClick={closeMobile} />
                        <motion.aside
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                            className="absolute right-0 top-0 flex h-full w-[min(100%,360px)] flex-col bg-white shadow-lift"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 280 }}
                        >
                            <div className="flex items-center justify-between border-b border-stone-100 px-4 py-4">
                                <span className="text-[11px] font-semibold tracking-[0.2em] text-ink-muted">Menu</span>
                                <button type="button" className="rounded-lg p-2 text-ink hover:bg-stone-50" aria-label="Close" onClick={closeMobile}>
                                    <Cancel01Icon color="currentColor" />
                                </button>
                            </div>
                            <nav className="flex flex-col gap-1 p-4 text-sm tracking-[0.18em]" onClick={closeMobile}>
                                <NavLink to="/" className={({ isActive }) => `rounded-lg px-3 py-3 ${isActive ? "bg-cream font-semibold text-ink" : "text-ink-muted hover:bg-stone-50"}`}>
                                    Home
                                </NavLink>
                                <NavLink to="/shop" className={({ isActive }) => `rounded-lg px-3 py-3 ${isActive ? "bg-cream font-semibold text-ink" : "text-ink-muted hover:bg-stone-50"}`}>
                                    Shop
                                </NavLink>
                                <NavLink to="/barkpack" className={({ isActive }) => `rounded-lg px-3 py-3 ${isActive ? "bg-cream font-semibold text-ink" : "text-ink-muted hover:bg-stone-50"}`}>
                                    Barkpack ({totalQty})
                                </NavLink>
                                <NavLink to="/about" className={({ isActive }) => `rounded-lg px-3 py-3 ${isActive ? "bg-cream font-semibold text-ink" : "text-ink-muted hover:bg-stone-50"}`}>
                                    About
                                </NavLink>
                                <NavLink to="/contact" className={({ isActive }) => `rounded-lg px-3 py-3 ${isActive ? "bg-cream font-semibold text-ink" : "text-ink-muted hover:bg-stone-50"}`}>
                                    Contact
                                </NavLink>
                            </nav>
                        </motion.aside>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
