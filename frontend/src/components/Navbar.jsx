import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Menu01Icon from "../assets/menu_icon";
import Cancel01Icon from "../assets/cross_icon";
import { motion } from "motion/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="sticky top-0 z-50 text-sm tracking-widest bg-white">
            <div className="flex items-center justify-between p-2 py-4 sm:mx-12 ">
                <Link to={"/"}>
                    <motion.p whileHover={{ y: -5, scale: 1.2 }} className="flex items-center text-2xl tracking-widest rubik-wet-paint-regular">
                        BARK & BRAWL
                    </motion.p>
                </Link>
                <ul className="hidden gap-2 tracking-widest md:flex md:gap lg:gap-12">
                    <NavLink to={"/"} className={({ isActive }) => (isActive ? "font-bold text-black" : "text-gray-600")}>
                        <motion.p whileHover={{ y: -5, scale: 1.2 }}>HOME</motion.p>
                    </NavLink>
                    <NavLink to={"/shop"} className={({ isActive }) => (isActive ? "font-bold text-black" : "text-gray-600")}>
                        <motion.p whileHover={{ y: -5, scale: 1.2 }} className="hover-effect hover:font-bold">
                            SHOP
                        </motion.p>
                    </NavLink>
                    <NavLink to={"/about"} className={({ isActive }) => (isActive ? "font-bold text-black" : "text-gray-600")}>
                        <motion.p whileHover={{ y: -5, scale: 1.2 }} className="hover-effect hover:font-bold">
                            ABOUT
                        </motion.p>
                    </NavLink>
                    <NavLink to={"/contact"} className={({ isActive }) => (isActive ? "font-bold text-black" : "text-gray-600")}>
                        <motion.p whileHover={{ y: -5, scale: 1.2 }} className="hover-effect hover:font-bold">
                            CONTACT
                        </motion.p>
                    </NavLink>
                </ul>

                <div className="flex items-center gap-4">
                    <Link to={"/barkpack"} className="hidden md:flex hover:font-bold">
                        <motion.p whileHover={{ y: -5, scale: 1.2 }}>BARKPACK (0)</motion.p>
                    </Link>
                    <Menu01Icon color="black" className=" md:hidden" onClick={() => setIsOpen(!isOpen)} />
                </div>

                {/* --------------The SideBar Menu for Mobile Screens--------------------------- */}

                <div className={`absolute right-0 bottom-0 top-0 md:hidden  transition-all bg-white ${isOpen ? "w-0" : "w-full"}`}>
                    <div className="flex flex-col gap-4 py-2 pt-8 pl-4 bg-white">
                        <div className="flex justify-end pr-4" onClick={() => setIsOpen(!isOpen)}>
                            <Cancel01Icon color="black" className="flex justify-end" />
                        </div>

                        <NavLink to={"/"} className="pb-2 border-b" onClick={() => setIsOpen(!isOpen)}>
                            <motion.p whileHover={{ y: -5, scale: 1.2 }}>HOME</motion.p>
                        </NavLink>
                        <NavLink to={"/shop"} className="pb-2 border-b" onClick={() => setIsOpen(!isOpen)}>
                            <motion.p whileHover={{ y: -5, scale: 1.2 }}>SHOP</motion.p>
                        </NavLink>
                        <NavLink to={"/barkpack"} className="pb-2 border-b" onClick={() => setIsOpen(!isOpen)}>
                            <motion.p whileHover={{ y: -5, scale: 1.2 }}>BARKPACK (0)</motion.p>
                        </NavLink>
                        <NavLink to={"/about"} className="pb-2 border-b" onClick={() => setIsOpen(!isOpen)}>
                            <motion.p whileHover={{ y: -5, scale: 1.2 }}>ABOUT</motion.p>
                        </NavLink>
                        <NavLink to={"/contact"} className="pb-2 border-b" onClick={() => setIsOpen(!isOpen)}>
                            <motion.p whileHover={{ y: -5, scale: 1.2 }}>CONTACT</motion.p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
