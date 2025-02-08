import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "../assets/assets";
import ArrowLeft02Icon from "../assets/arrow_left";
import ArrowRight02Icon from "../assets/arrow_right";
import { AnimationContext } from "../context/AnimaitonContext";

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState("right");

    const { containerVariants, childVariants } = useContext(AnimationContext);

    // Motion variants for sliding animation
    const reviewVariants = {
        enter: (direction) => ({
            x: direction === "right" ? 100 : -100,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction) => ({
            x: direction === "right" ? -100 : 100,
            opacity: 0,
        }),
    };

    const handlePrev = () => {
        setSlideDirection("left");
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSlideDirection("right");
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    const goToReview = (index) => {
        setSlideDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    return (
        <div className="flex justify-center">
            <div className="w-3/4 mt-10 border">
                {/* Title */}
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="mt-4 text-xl text-center text-gray-600 uppercase">"Two Paws Up: What Our Furry Fighters Are Barking About!"</p>
                    <div className="w-1/3 h-px mt-2 bg-gray-600"></div>
                </div>

                {/* Review Content */}
                <div className="flex flex-col items-center w-full p-8 mx-4 mt-8 mb-8 group">
                    <div className="flex items-center justify-around w-full text-center">
                        {/* Left Arrow */}
                        <button aria-label="Previous Review" className="flex items-center px-2 py-2 bg-gray-500 rounded-full cursor-pointer active:bg-white" onClick={handlePrev}>
                            <ArrowLeft02Icon color="white" className="bg-gray-500 rounded-full arrow-effect-left" />
                        </button>

                        {/* Animated Review Container */}
                        <div className="relative flex items-center justify-center w-full min-h-80">
                            <AnimatePresence custom={slideDirection} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={slideDirection}
                                    variants={reviewVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute flex flex-col items-center justify-center w-full text-center"
                                >
                                    <p className="w-full text-2xl font-bold tracking-wider uppercase text-balance md:text-4xl fjalla-one-regular md:leading-relaxed">
                                        "{reviews[currentIndex].Review}"
                                    </p>
                                    <p className="mt-8 tracking-widest text-gray-500 uppercase">-- {reviews[currentIndex].Reviewer}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Arrow */}
                        <button aria-label="Next Review" className="flex items-center px-2 py-2 bg-gray-500 rounded-full cursor-pointer active:bg-white" onClick={handleNext}>
                            <ArrowRight02Icon color="white" className="arrow-effect-right" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="flex justify-center mt-8 space-x-2">
                        {reviews.map((_, index) => (
                            <motion.span
                                variants={childVariants}
                                role="button"
                                tabIndex="0"
                                aria-label={`Go to review ${index + 1}`}
                                key={index}
                                onClick={() => goToReview(index)}
                                className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex === index ? "bg-gray-800" : "bg-gray-300"}`}
                            ></motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Review;
