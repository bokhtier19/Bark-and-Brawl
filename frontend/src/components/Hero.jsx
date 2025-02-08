import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hero_slides } from "../assets/assets.js";
import ArrowLeft02Icon from "../assets/arrow_left.tsx";
import ArrowRight02Icon from "../assets/arrow_right.tsx";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = 5000; // Time in milliseconds (5 seconds)

    // Function to go to the previous slide
    const LeftSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? hero_slides.length - 1 : prevIndex - 1));
    };

    // Function to go to the next slide
    const RightSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === hero_slides.length - 1 ? 0 : prevIndex + 1));
    };

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            RightSlide();
        }, slideInterval);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div>
            <div className="relative overflow-hidden border-t group border-x">
                <div className="relative w-full h-[250px] md:h-[700px] xl:h-[950px]">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={hero_slides[currentIndex].image}
                            alt="Hero slide"
                            className="absolute object-cover w-full h-full"
                            initial={{ opacity: 0, x: 100 }} // Slide in from right
                            animate={{ opacity: 1, x: 0 }} // Fade in and settle
                            exit={{ opacity: 0, x: -100 }} // Slide out to left
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                        />
                    </AnimatePresence>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 md:opacity-30 hover:opacity-0"></div>

                {/* Text Animation */}
                <div className="absolute inset-0 flex items-end justify-center">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`text-${currentIndex}`}
                            className="w-full p-4 px-4 text-3xl font-black text-center text-white uppercase -translate-y-1/2 fjalla-one-regular md:text-5xl xl:text-7xl md:mb-20 md:text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {hero_slides[currentIndex].dialog}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Left Arrow */}
                <div className="absolute hidden px-2 py-2 transform -translate-y-1/2 bg-gray-800 rounded-full cursor-pointer group-hover:block top-1/2 left-4" onClick={LeftSlide}>
                    <button>
                        <ArrowLeft02Icon color="white" className="arrow-effect-left" />
                    </button>
                </div>

                {/* Right Arrow */}
                <div className="absolute hidden px-2 py-2 transform -translate-y-1/2 bg-gray-800 rounded-full cursor-pointer group-hover:block top-1/2 right-4" onClick={RightSlide}>
                    <button>
                        <ArrowRight02Icon color="white" className="arrow-effect-right" />
                    </button>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
                {hero_slides.map((_, index) => (
                    <span key={index} onClick={() => setCurrentIndex(index)} className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex === index ? "bg-gray-800" : "bg-gray-300"}`}></span>
                ))}
            </div>
        </div>
    );
};

export default Hero;
