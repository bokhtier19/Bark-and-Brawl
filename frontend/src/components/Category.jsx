import { useContext } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { AnimationContext } from "../context/AnimationContext.jsx";

const Category = () => {
    const { containerVariants, rightVariants, leftVariants } = useContext(AnimationContext);

    const categoryArray = [
        { image: assets.Gloves_1, label: "Ruff & Tumble Gloves" },
        { image: assets.MouthGuard_1, label: "Furry Fury Face Mask" },
        { image: assets.Robes_1, label: "Heavyweight Howler Robes" },
        { image: assets.ChewToy_1, label: "Chew Toy Speed Bags" },
    ];

    return (
        <section className="mt-16 mb-20 px-2 md:px-6">
            <h2 className="fjalla-one-regular mb-10 text-center text-xl font-normal uppercase tracking-[0.2em] text-ink md:text-2xl">Products we offer</h2>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={containerVariants}
                viewport={{ once: true, margin: "-40px" }}
                className="relative mx-auto grid max-w-7xl grid-cols-2 gap-3 p-4 md:grid-cols-4 md:gap-4 md:p-8"
            >
                <motion.div variants={leftVariants} className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
                    <img src={assets.combinedGear} alt="" className="size-full object-cover transition duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent" />
                    <p className="fjalla-one-regular absolute left-1/2 top-1/2 z-[1] w-[90%] -translate-x-1/2 -translate-y-1/2 text-center text-lg leading-snug tracking-wide text-white drop-shadow-md md:text-2xl">
                        Equip your dog for the streets: tough gear, fierce style, ready to brawl.
                    </p>
                </motion.div>

                {categoryArray.map((item) => (
                    <motion.div variants={rightVariants} key={item.label} className="group relative overflow-hidden rounded-2xl">
                        <img src={item.image} alt="" className="aspect-square size-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                        <p className="fjalla-one-regular absolute bottom-4 left-1/2 w-[92%] -translate-x-1/2 text-center text-[11px] uppercase leading-tight tracking-wide text-white md:text-sm lg:text-base">
                            {item.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Category;
