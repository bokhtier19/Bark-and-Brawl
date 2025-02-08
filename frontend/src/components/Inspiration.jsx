import React, { Children, useContext } from "react";
import { assets } from "../assets/assets";
import ArrowRight02Icon from "../assets/arrow_right";
import { motion } from "motion/react";
import { AnimationContext } from "../context/AnimaitonContext";

const Inspiration = () => {
    const { containerVariants, childVariants, rightVariants, longRightVariants, leftVariants } = useContext(AnimationContext);
    return (
        <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="flex flex-col gap-4 mx-2 mt-10 mb-10 border border-gray-400 lg:flex-row">
            <motion.div variants={leftVariants} className="justify-center hidden w-2/6 p-12 overflow-hidden lg:flex h-1/4">
                <img src={assets.Inspire_1} alt="" className="" />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={containerVariants}
                viewport={{ once: true }}
                className="flex flex-col justify-around w-full gap-4 p-2 text-center lg:w-1/2 md:p-4"
            >
                <motion.h1 variants={childVariants} className="text-2xl font-bold tracking-wide text-center uppercase md:leading-relaxed fjalla-one-regular md:text-5xl">
                    Unleash Your Dog’s Street Fighter Spirit with Bark Brawls
                </motion.h1>
                <motion.p variants={childVariants} className="text-sm text-gray-600 md:text-xl">
                    At Bark Brawls, we’re not just a shop—we’re a movement for tough pups with street smarts and fighting hearts. Born from our love for dogs and the gritty charm of street combat, we
                    equip dogs with the gear they need to rule the block. Whether your dog’s a scrappy underdog or a fearless heavyweight, our products are built to turn everyday pups into street
                    champions. Learn more about our journey and join the Bark Brawls pack to see how we’re helping dogs everywhere bring their A-game to the streets.
                </motion.p>
                <motion.div variants={childVariants} className="flex justify-around w-full mt-4">
                    <button className="flex items-center gap-4 px-8 py-2 tracking-widest text-white bg-black rounded-3xl">
                        <span className="text-xs button-hover-effect">SHOP ALL</span>
                    </button>
                    <button className="flex items-center gap-4 px-8 py-2 tracking-widest text-white bg-black rounded-3xl">
                        <span className="text-xs button-hover-effect">OUR STORY</span>
                        <ArrowRight02Icon width={20} className="arrow-effect" />
                    </button>
                </motion.div>
            </motion.div>

            <motion.div variants={rightVariants} className="justify-center hidden w-2/6 p-12 lg:flex h-1/4">
                <img src={assets.Inspire_2} alt="" className="" />
            </motion.div>

            <div className="grid w-full grid-cols-2 gap-4 p-4 lg:hidden">
                <img src={assets.Inspire_1} alt="" className="w-full" />
                <img src={assets.Inspire_2} alt="" className="w-full" />
            </div>
        </motion.div>
    );
};

export default Inspiration;
