import React, { useContext } from "react";
import { bestsellers } from "../assets/assets";
import { motion } from "motion/react";
import { AnimationContext } from "../context/AnimaitonContext";

const BestSeller = () => {
    const { containerVariants, rightVariants } = useContext(AnimationContext);
    let currency = "$";
    return (
        <div>
            <h1 className="mb-10 font-bold text-center text-gray-700 uppercase"> Our Bestsellers</h1>

            <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
                {bestsellers.map((item, index) => (
                    <motion.div variants={rightVariants} key={index} className="">
                        <div className="overflow-hidden">
                            <img src={item.image} alt="" className="transition-transform duration-300 transform opacity-100 hover:opacity-85 hover:scale-105" />
                        </div>
                        <div>
                            <p className="mt-4 text-sm font-bold tracking-wider text-center fjalla-one-regular">{item.name}</p>
                            <p className="mt-2 mb-4 text-center text-gray-500">
                                {currency}
                                {item.price}.00
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default BestSeller;
