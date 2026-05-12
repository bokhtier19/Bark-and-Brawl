import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import ArrowRight02Icon from "../assets/arrow_right";
import { AnimationContext } from "../context/AnimationContext.jsx";

const Inspiration = () => {
    const { containerVariants, childVariants, rightVariants, leftVariants } = useContext(AnimationContext);

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            viewport={{ once: true, margin: "-60px" }}
            className="mx-2 mt-12 mb-12 overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-card md:mx-8"
        >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
                <motion.div variants={leftVariants} className="relative hidden w-full overflow-hidden lg:block lg:w-[28%]">
                    <img src={assets.Inspire_1} alt="" className="h-full min-h-[280px] w-full object-cover" />
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-1 flex-col justify-center gap-6 px-6 py-10 text-center md:px-12">
                    <motion.h2 variants={childVariants} className="fjalla-one-regular text-2xl font-normal uppercase leading-snug tracking-wide text-ink md:text-4xl md:leading-tight">
                        Unleash your dog’s street fighter spirit
                    </motion.h2>
                    <motion.p variants={childVariants} className="text-sm leading-relaxed text-ink-muted md:text-lg">
                        At Bark & Brawl, we’re not just a shop—we’re a movement for tough pups with street smarts and fighting hearts. Gear built to turn everyday pups into champions.
                    </motion.p>
                    <motion.div variants={childVariants} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            to="/shop"
                            className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-ink px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white shadow-card transition hover:bg-accent"
                        >
                            Shop all
                        </Link>
                        <Link
                            to="/about"
                            className="group inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink transition hover:border-accent hover:text-accent"
                        >
                            Our story
                            <ArrowRight02Icon width={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div variants={rightVariants} className="relative hidden overflow-hidden lg:block lg:w-[28%]">
                    <img src={assets.Inspire_2} alt="" className="h-full min-h-[280px] w-full object-cover" />
                </motion.div>

                <div className="grid grid-cols-2 gap-3 p-4 lg:hidden">
                    <img src={assets.Inspire_1} alt="" className="h-full rounded-xl object-cover" />
                    <img src={assets.Inspire_2} alt="" className="h-full rounded-xl object-cover" />
                </div>
            </div>
        </motion.section>
    );
};

export default Inspiration;
