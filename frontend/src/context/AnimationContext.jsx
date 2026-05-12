import { createContext, useMemo } from "react";
import { useReducedMotion } from "framer-motion";

export const AnimationContext = createContext(null);

export function AnimationProvider({ children }) {
    const reduceMotion = useReducedMotion();

    const value = useMemo(() => {
        const instant = reduceMotion ? { duration: 0.001 } : null;

        const spring = reduceMotion
            ? { duration: 0.001 }
            : {
                  type: "spring",
                  damping: 22,
                  stiffness: 120,
              };

        const fadeY = (y) => ({
            hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : y },
            show: {
                opacity: 1,
                y: 0,
                transition: spring,
            },
        });

        const fadeX = (x) => ({
            hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : x },
            show: {
                opacity: 1,
                x: 0,
                transition: spring,
            },
        });

        const containerVariants = {
            hidden: { opacity: reduceMotion ? 1 : 0 },
            show: {
                opacity: 1,
                transition: instant
                    ? instant
                    : {
                          staggerChildren: 0.1,
                          delayChildren: 0.12,
                          when: "beforeChildren",
                      },
            },
        };

        const childVariants = fadeY(reduceMotion ? 0 : 48);
        const rightVariants = fadeX(reduceMotion ? 0 : 72);
        const leftVariants = fadeX(reduceMotion ? 0 : -72);

        return {
            containerVariants,
            childVariants,
            rightVariants,
            leftVariants,
            reduceMotion,
        };
    }, [reduceMotion]);

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
}

export default AnimationProvider;
