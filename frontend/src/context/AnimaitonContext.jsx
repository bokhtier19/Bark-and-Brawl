import React, { createContext } from "react";

export const AnimationContext = createContext();

export const AnimaitonProvider = ({ children }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.1,
                staggerChildren: 0.2,
                delayChildren: 0.3,
                when: "beforeChildren",
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };

    const longRightVariants = {
        hidden: { opacity: 0, x: 500 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 0.2,
            },
        },
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };

    return <AnimationContext.Provider value={{ containerVariants, childVariants, rightVariants, leftVariants, longRightVariants }}>{children} </AnimationContext.Provider>;
};

export default AnimaitonProvider;
