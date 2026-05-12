import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import ArrowRight02Icon from "../assets/arrow_right";
import { AnimationContext } from "../context/AnimationContext.jsx";
import { useCart } from "../hooks/useCart.js";

const FeaturedProduct = () => {
    const { containerVariants, childVariants, leftVariants, rightVariants } = useContext(AnimationContext);
    const { addItem } = useCart();

    const helmetProduct = {
        id: "barkinator-headguard",
        name: "The Barkinator Headguard",
        price: 85,
        image: assets.Headguard_3,
    };

    const glovesProduct = {
        id: "ruff-tumble-gloves",
        name: "Ruff & Tumble Gloves",
        price: 99,
        image: assets.Gloves_1,
    };

    return (
        <section className="mt-20 mb-16 px-4">
            <p className="fjalla-one-regular mx-auto mb-14 max-w-4xl text-center text-xl font-normal uppercase leading-snug tracking-wide text-ink md:text-3xl md:leading-relaxed">
                Step right up to our most unleashed picks — gear that’ll make your pup howl with style.
            </p>

            <div className="py-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={containerVariants}
                    className="mx-auto flex max-w-[92%] flex-col items-center gap-10 md:flex-row md:gap-14"
                >
                    <motion.div variants={leftVariants} className="w-full md:w-1/3">
                        <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-ink-muted">Spotlight</h2>
                        <h3 className="fjalla-one-regular mb-4 text-lg uppercase tracking-wide text-ink">Barktective helmet</h3>
                        <p className="mb-6 text-sm leading-relaxed text-ink-muted">
                            Military-grade headgear to keep your dog alert and stylish — ready for any street mission.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => addItem(helmetProduct)}
                                className="rounded-full bg-ink px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent"
                            >
                                Add to barkpack
                            </button>
                            <Link
                                to="/shop"
                                className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted transition hover:border-accent hover:text-accent"
                            >
                                View catalog
                                <ArrowRight02Icon width={18} color="currentColor" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid w-full grid-cols-3 gap-3 md:w-2/3 md:gap-4">
                        <motion.img variants={childVariants} src={assets.Headguard_3} alt="Helmet front" className="rounded-xl object-cover opacity-95 shadow-card transition hover:opacity-100" />
                        <motion.img variants={childVariants} src={assets.Headguard_2} alt="Helmet side" className="rounded-xl object-cover opacity-95 shadow-card transition hover:opacity-100" />
                        <motion.img variants={childVariants} src={assets.Headguard_1} alt="Helmet detail" className="rounded-xl object-cover opacity-95 shadow-card transition hover:opacity-100" />
                    </motion.div>
                </motion.div>
            </div>

            <div className="py-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={containerVariants}
                    className="mx-auto flex max-w-[92%] flex-col-reverse items-center gap-10 md:flex-row md:gap-14"
                >
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid w-full grid-cols-3 gap-3 md:w-2/3 md:gap-4">
                        <motion.img variants={childVariants} src={assets.Gloves_1} alt="Gloves front" className="rounded-xl object-cover opacity-95 shadow-card transition hover:opacity-100" />
                        <motion.img variants={childVariants} src={assets.Gloves_2} alt="Gloves side" className="rounded-xl object-cover opacity-95 shadow-card transition hover:opacity-100" />
                        <motion.img variants={childVariants} src={assets.Gloves_3} alt="Gloves detail" className="rounded-xl object-cover opacity-95 shadow-card transition hover:opacity-100" />
                    </motion.div>

                    <motion.div variants={rightVariants} className="w-full text-right md:w-1/3">
                        <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-ink-muted">Featured fight gloves</h2>
                        <h3 className="fjalla-one-regular mb-4 text-lg uppercase tracking-wide text-ink">Paw-some fight gloves</h3>
                        <p className="mb-6 text-sm leading-relaxed text-ink-muted">
                            Built for playful tussles and friendly competitions — safe, durable, and ready for the ring.
                        </p>
                        <div className="flex flex-wrap justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => addItem(glovesProduct)}
                                className="rounded-full bg-ink px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent"
                            >
                                Add to barkpack
                            </button>
                            <Link
                                to="/shop"
                                className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted transition hover:border-accent hover:text-accent"
                            >
                                View catalog
                                <ArrowRight02Icon width={18} color="currentColor" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
