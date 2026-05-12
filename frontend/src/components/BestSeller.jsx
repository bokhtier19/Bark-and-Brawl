import { useContext } from "react";
import { motion } from "framer-motion";
import { bestsellers } from "../assets/assets";
import { AnimationContext } from "../context/AnimationContext.jsx";
import { useCart } from "../hooks/useCart.js";
import { formatUsd } from "../utils/format.js";

const BestSeller = () => {
    const { containerVariants, rightVariants } = useContext(AnimationContext);
    const { addItem } = useCart();

    return (
        <section className="border-y border-stone-100 bg-white py-16">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="fjalla-one-regular mb-12 text-center text-2xl font-normal uppercase tracking-[0.15em] text-ink md:text-3xl">Our bestsellers</h2>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true, margin: "-40px" }}
                    className="grid grid-cols-2 gap-5 px-1 md:grid-cols-4 md:gap-8"
                >
                    {bestsellers.map((item) => (
                        <motion.article
                            variants={rightVariants}
                            key={item.id}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-paper shadow-card transition hover:-translate-y-1 hover:shadow-lift"
                        >
                            <div className="aspect-square overflow-hidden bg-cream">
                                <img src={item.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105" />
                            </div>
                            <div className="flex flex-1 flex-col gap-3 p-4">
                                <h3 className="fjalla-one-regular text-center text-sm font-normal uppercase tracking-wide text-ink">{item.name}</h3>
                                <p className="text-center text-sm text-ink-muted">{formatUsd(item.price)}</p>
                                <button
                                    type="button"
                                    className="mt-auto rounded-full border border-stone-200 bg-white py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-accent hover:text-accent"
                                    onClick={() => addItem(item)}
                                >
                                    Add to barkpack
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BestSeller;
