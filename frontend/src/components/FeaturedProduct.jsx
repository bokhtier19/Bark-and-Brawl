import React, { useContext } from "react";
import { assets } from "../assets/assets";
import ArrowLeft02Icon from "../assets/arrow_left";
import ArrowRight02Icon from "../assets/arrow_right";
import { motion } from "motion/react";
import { AnimationContext } from "../context/AnimaitonContext";

const FeaturedProduct = () => {
    const { containerVariants, childVariants, leftVariants, rightVariants } = useContext(AnimationContext);

    return (
        <div className="mt-20 mb-10">
            <div className="flex justify-center text-center ">
                <p className="w-full max-w-6xl text-2xl font-bold tracking-wide text-center uppercase md:text-4xl fjalla-one-regular md:leading-relaxed">
                    Step Right Up to Our Most Unleashed Picks: Dog Gear That’ll Make Your Pup Howl with Style!
                </p>
            </div>

            {/* ---------------Product one ------------------ */}
            <div className="py-12 text-white ">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center">
                    {/* Text Section */}
                    <motion.div variants={leftVariants} className="w-full px-4 mb-8 md:w-1/3 md:mb-0">
                        <h2 className="mb-4 text-base font-bold tracking-widest text-gray-700 uppercase">Barktective Helmet</h2>
                        <p className="mb-6 text-gray-500">The Barktective Helmet is military-grade headgear, designed to keep your dog alert and stylish, ready for any street mission.</p>
                        <button className="flex items-center gap-4 text-xs tracking-wider text-gray-500 uppercase">
                            <span className="button-hover-effect">View Full Product </span>
                            <ArrowRight02Icon width={20} color="gray-500" className="arrow-effect-right" />
                        </button>
                    </motion.div>

                    {/* Image Gallery Section */}
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid w-full grid-cols-3 gap-4 md:w-2/3">
                        <motion.img variants={childVariants} src={assets.Headguard_3} alt="Dog Helmet Front View" className="transition-opacity opacity-90 hover:opacity-100" />
                        <motion.img variants={childVariants} src={assets.Headguard_2} alt="Dog Helmet Side View" className="transition-opacity opacity-90 hover:opacity-100" />
                        <motion.img variants={childVariants} src={assets.Headguard_1} alt="Dog Helmet Close-up" className="transition-opacity opacity-90 hover:opacity-100" />
                    </motion.div>
                </motion.div>
            </div>
            {/* ---------------Product Two ------------------ */}
            <div className="py-12 text-white ">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="max-w-[90%] mx-auto flex flex-col md:flex-row-reverse items-center">
                    {/* Text Section */}
                    <motion.div variants={rightVariants} className="flex flex-col justify-end w-full px-4 mb-8 md:w-1/3 md:mb-0 text-end">
                        <h2 className="mb-4 text-base font-bold tracking-widest text-gray-700 uppercase">Paw-some Fight Gloves</h2>
                        <p className="mb-6 text-gray-500">
                            Our Paw-some Fight Gloves are designed for your furry fighter! Made for playful tussles and friendly competitions, these gloves ensure your pup stays safe while having a
                            blast.
                        </p>
                        <button className="flex items-center justify-end gap-4 text-xs tracking-wider text-gray-500 uppercase">
                            <span className="button-hover-effect">View Full Product </span>
                            <ArrowRight02Icon width={20} color="gray-500" className="arrow-effect-right" />
                        </button>
                    </motion.div>

                    {/* Image Gallery Section */}
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid w-full grid-cols-3 gap-4 md:w-2/3">
                        <motion.img variants={childVariants} src={assets.Gloves_1} alt="Dog Helmet Front View" className="transition-opacity opacity-90 hover:opacity-100" />
                        <motion.img variants={childVariants} src={assets.Gloves_2} alt="Dog Helmet Side View" className="transition-opacity opacity-90 hover:opacity-100" />
                        <motion.img variants={childVariants} src={assets.Gloves_3} alt="Dog Helmet Close-up" className="transition-opacity opacity-90 hover:opacity-100" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
