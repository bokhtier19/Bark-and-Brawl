import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "../assets/assets";
import ArrowLeft02Icon from "../assets/arrow_left";
import ArrowRight02Icon from "../assets/arrow_right";
import { AnimationContext } from "../context/AnimationContext.jsx";

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState("right");

    const { containerVariants, childVariants } = useContext(AnimationContext);

    const reviewVariants = {
        enter: (direction) => ({
            x: direction === "right" ? 48 : -48,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction) => ({
            x: direction === "right" ? -48 : 48,
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
        <section className="flex justify-center px-2 py-10">
            <div className="w-full max-w-4xl rounded-3xl border border-stone-100 bg-white shadow-card">
                <div className="flex flex-col items-center px-4 pt-10 text-center">
                    <p className="fjalla-one-regular text-lg uppercase tracking-wide text-ink-muted md:text-xl">Two paws up — what fighters are barking about</p>
                    <div className="mt-4 h-px w-24 bg-accent/60" />
                </div>

                <div className="flex flex-col items-center px-4 py-10">
                    <div className="flex w-full items-center justify-between gap-4">
                        <button
                            type="button"
                            aria-label="Previous review"
                            className="shrink-0 rounded-full bg-stone-100 p-3 text-ink transition hover:bg-stone-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent"
                            onClick={handlePrev}
                        >
                            <ArrowLeft02Icon color="currentColor" className="h-5 w-5" />
                        </button>

                        <div className="relative flex min-h-[200px] flex-1 items-center justify-center overflow-hidden md:min-h-[240px]">
                            <AnimatePresence custom={slideDirection} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={slideDirection}
                                    variants={reviewVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute flex flex-col items-center px-2 text-center"
                                >
                                    <p className="fjalla-one-regular text-xl font-normal uppercase leading-snug tracking-wide text-ink md:text-3xl">
                                        {reviews[currentIndex].Review}
                                    </p>
                                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">— {reviews[currentIndex].Reviewer}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <button
                            type="button"
                            aria-label="Next review"
                            className="shrink-0 rounded-full bg-stone-100 p-3 text-ink transition hover:bg-stone-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent"
                            onClick={handleNext}
                        >
                            <ArrowRight02Icon color="currentColor" className="h-5 w-5" />
                        </button>
                    </div>

                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="mt-10 flex flex-wrap justify-center gap-2">
                        {reviews.map((_, index) => (
                            <motion.button
                                variants={childVariants}
                                type="button"
                                key={`review-dot-${index}`}
                                aria-label={`Go to review ${index + 1}`}
                                aria-current={currentIndex === index}
                                onClick={() => goToReview(index)}
                                className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent ${
                                    currentIndex === index ? "w-8 bg-accent" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                                }`}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Review;
