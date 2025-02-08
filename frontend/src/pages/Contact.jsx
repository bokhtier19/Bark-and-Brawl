import React, { useContext } from "react";
import FAQ from "../components/FAQs";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AnimationContext } from "./../context/AnimaitonContext";

const Contact = () => {
    const { containerVariants, childVariants } = useContext(AnimationContext);

    return (
        <section className="p-8 text-black uppercase bg-white md:p-16">
            <div className="justify-center mx-auto text-center max-w-7xl">
                <motion.h2
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="mb-4 text-4xl font-bold uppercase fjalla-one-regular"
                >
                    Get in Touch, Top Dog!
                </motion.h2>
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="flex w-full mt-8 mb-8 text-lg text-gray-700 uppercase fjalla-one-regular text-balance"
                >
                    Whether you've got a question, a bark of praise, or just want to chat, we're all ears (and paws)! Reach out, and one of our human pack members will fetch a response ASAP.
                </motion.p>

                {/* Contact Information */}

                <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="flex justify-around p-8 mt-8 mb-8 border">
                    <motion.div variants={childVariants} className="w-1/2">
                        <img src={assets.contact_page} alt="" width={500} />
                    </motion.div>

                    <motion.div variants={childVariants} className="flex flex-col items-center justify-center gap-6 mb-10">
                        <div>
                            <p className="font-semibold text-gray-700">Doghouse Headquarters:</p>
                            <p className="text-gray-700">123 Ruff St., Barksville, Dogland</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Phone:</p>
                            <p className="text-gray-700">(555) WOOF-123 (Yes, it’s a real number!)</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Email:</p>
                            <p className="text-gray-700">bark@streetfighterdogs.com</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <form className="p-8 space-y-4 text-left text-gray-700 uppercase border max-w-7xl">
                    <div>
                        <label className="block mb-1 font-semibold uppercase" htmlFor="name">
                            Your Name (or your pup's):
                        </label>
                        <input type="text" id="name" className="w-full p-2 text-xs tracking-wider text-white uppercase border border-gray-500" placeholder="Name here... or just a paw print" />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="email">
                            Email:
                        </label>
                        <input type="email" id="email" className="w-full p-2 text-xs tracking-wider text-white uppercase border border-gray-500" placeholder="What's your human's email?" />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="message">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            className="w-full p-2 text-xs tracking-wider text-white uppercase border border-gray-500"
                            rows="4"
                            placeholder="Tell us what’s on your mind... or bark it out!"
                        ></textarea>
                    </div>
                    <button type="submit" className="px-6 py-2 font-bold tracking-wider text-white uppercase bg-black rounded hover:bg-gray-900">
                        Send a Woof
                    </button>
                </form>

                <FAQ />

                {/* Fun Footer */}
                <div className="mt-10 text-sm text-gray-900">
                    <p>🐾 *Disclaimer: We may respond with treats, not just answers!* 🐾</p>
                    <p>Catch us on social media if email feels too "leash-y" for you!</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
