import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { hero_slides } from "../assets/assets.js";
import ArrowLeft02Icon from "../assets/arrow_left";
import ArrowRight02Icon from "../assets/arrow_right";

const SLIDE_MS = 5500;

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reduceMotion = useReducedMotion();

    const goPrev = useCallback(() => {
        setCurrentIndex((i) => (i === 0 ? hero_slides.length - 1 : i - 1));
    }, []);

    const goNext = useCallback(() => {
        setCurrentIndex((i) => (i === hero_slides.length - 1 ? 0 : i + 1));
    }, []);

    useEffect(() => {
        const id = window.setInterval(() => {
            setCurrentIndex((i) => (i === hero_slides.length - 1 ? 0 : i + 1));
        }, SLIDE_MS);
        return () => window.clearInterval(id);
    }, []);

    const slideTransition = reduceMotion ? { duration: 0.15 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

    return (
        <section className="relative" aria-label="Featured hero slides">
            <div className="group relative overflow-hidden border-x border-stone-200/80 bg-ink">
                <div className="relative h-[min(58vh,260px)] w-full md:h-[min(78vh,700px)] xl:h-[min(85vh,950px)]">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={hero_slides[currentIndex].image}
                            alt=""
                            className="absolute size-full object-cover"
                            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                            transition={slideTransition}
                        />
                    </AnimatePresence>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent md:via-ink/10" />

                <div className="absolute inset-0 flex items-end justify-center pb-10 md:pb-24">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`caption-${currentIndex}`}
                            className="fjalla-one-regular max-w-5xl px-6 text-center text-2xl font-normal uppercase leading-tight text-white drop-shadow-md md:text-5xl xl:text-7xl"
                            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
                            transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
                        >
                            {hero_slides[currentIndex].dialog}
                        </motion.p>
                    </AnimatePresence>
                </div>

                <button
                    type="button"
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white opacity-0 shadow-lg backdrop-blur-sm transition hover:bg-white/25 focus-visible:opacity-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white group-hover:opacity-100 md:block"
                    onClick={goPrev}
                >
                    <ArrowLeft02Icon color="currentColor" className="h-6 w-6" />
                </button>
                <button
                    type="button"
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white opacity-0 shadow-lg backdrop-blur-sm transition hover:bg-white/25 focus-visible:opacity-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white group-hover:opacity-100 md:block"
                    onClick={goNext}
                >
                    <ArrowRight02Icon color="currentColor" className="h-6 w-6" />
                </button>
            </div>

            <div className="flex justify-center gap-2 py-8" role="tablist" aria-label="Choose slide">
                {hero_slides.map((slide, index) => (
                    <button
                        key={slide.dialog}
                        type="button"
                        role="tab"
                        aria-selected={currentIndex === index}
                        aria-label={`Slide ${index + 1}`}
                        className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent ${currentIndex === index ? "w-8 bg-accent" : "w-2.5 bg-stone-300 hover:bg-stone-400"}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
