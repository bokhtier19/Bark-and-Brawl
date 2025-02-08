import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AnimationContext } from "./../context/AnimaitonContext";

const Category = () => {
    const { containerVariants, childVariants, rightVariants, leftVariants } = useContext(AnimationContext);

    const categoryArray = [
        { image: assets.Gloves_1, label: "Ruff & Tumble Gloves" },
        { image: assets.MouthGuard_1, label: "Furry Fury Face Mask" },
        { image: assets.Robes_1, label: "Heavyweight Howler Robes" },
        { image: assets.ChewToy_1, label: "Chew Toy Speed Bags" },
    ];

    return (
        <div className="mt-20 mb-20">
            <div className="text-xl font-bold text-center text-gray-700 md:text-2xl">
                <h1>PRODUCTS WE OFFER</h1>
            </div>
            <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="relative grid grid-cols-2 gap-4 p-8 md:grid-cols-4">
                <motion.div variants={leftVariants} className="relative col-span-2 row-span-2 overflow-hidden hover:cursor-pointer">
                    <img src={assets.combinedGear} alt="" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                    <p className="absolute p-8 text-2xl leading-loose tracking-wider text-center text-white uppercase transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 top-1/2 left-1/2 fjalla-one-regular md:text-3xl">
                        "Equip Your Dog for the Streets: Tough Gear, Fierce Style, Ready to Brawl!"
                    </p>
                </motion.div>

                {/* ------------- side product items ----------*/}
                {categoryArray.map((item, index) => (
                    <motion.div variants={rightVariants} key={index} className="relative overflow-hidden hover:cursor-pointer">
                        <img src={item.image} alt="" className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110" />
                        <p className="absolute items-end p-8 text-sm text-white uppercase transform -translate-x-1/2 bg-opacity-75 top-3/4 left-1/2 -translate-y-1/4 text-nowrap fjalla-one-regular lg:text-xl">
                            {item.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Category;
