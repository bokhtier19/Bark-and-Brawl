import React, { useContext } from "react";
import { allproducts } from "../assets/assets";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimaitonContext";

const BestSeller = () => {
    let currency = "$";
    const { containerVariants, childVariants } = useContext(AnimationContext);

    return (
        <div className="flex justify-center mt-10 mb-10">
            <div className="flex flex-col justify-center max-w-7xl">
                <h1 className="mb-10 font-bold tracking-widest text-center text-gray-700 uppercase fjalla-one-regular">Pawsitively Pawesome Picks!</h1>

                <div className="flex gap-4 mb-4 ml-4 text-xs tracking-widest text-center text-gray-700 uppercase max-w-7xl">
                    <p>Category:</p>
                    <p>Tactical gear</p>
                    <p>PurrTection Gear</p>
                </div>

                <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-3">
                    {allproducts.map((item, index) => (
                        <motion.div variants={childVariants} key={index} className="">
                            <div>
                                <img src={item.image} alt="" />
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
        </div>
    );
};

export default BestSeller;
