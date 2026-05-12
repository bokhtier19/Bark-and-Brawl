import { useContext, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { allproducts } from "../assets/assets";
import { AnimationContext } from "../context/AnimationContext.jsx";
import { useCart } from "../hooks/useCart.js";
import { formatUsd } from "../utils/format.js";

const FILTERS = [
    { id: "all", label: "All gear" },
    { id: "new", label: "New drops" },
    { id: "bestsellers", label: "Pack favorites" },
];

const AllProducts = () => {
    const { containerVariants, childVariants } = useContext(AnimationContext);
    const { addItem } = useCart();
    const [filter, setFilter] = useState("all");

    const list = useMemo(() => {
        if (filter === "new") return allproducts.filter((p) => p.new);
        if (filter === "bestsellers") return allproducts.filter((p) => p.bestsellers);
        return allproducts;
    }, [filter]);

    return (
        <section className="bg-paper py-16">
            <div className="mx-auto max-w-7xl px-4">
                <header className="mb-10 text-center">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">Shop</p>
                    <h1 className="fjalla-one-regular text-3xl font-normal uppercase tracking-[0.12em] text-ink md:text-4xl">Full catalog</h1>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
                        Everything we stock for street-smart pups — tap a filter or load up your barkpack.
                    </p>
                </header>

                <div className="mb-10 flex flex-wrap justify-center gap-2">
                    {FILTERS.map((f) => (
                        <button
                            key={f.id}
                            type="button"
                            onClick={() => setFilter(f.id)}
                            className={`rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition ${
                                filter === f.id ? "bg-ink text-white shadow-card" : "border border-stone-200 bg-white text-ink-muted hover:border-stone-300"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true, margin: "-40px" }}
                    className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:gap-8"
                >
                    {list.map((item) => (
                        <motion.article
                            key={item.id}
                            variants={childVariants}
                            layout
                            className="group flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                                <img src={item.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                                {item.new ? (
                                    <span className="absolute left-3 top-3 rounded-full bg-accent px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white">New</span>
                                ) : null}
                            </div>
                            <div className="flex flex-1 flex-col gap-2 p-4">
                                <h2 className="fjalla-one-regular text-center text-sm uppercase tracking-wide text-ink">{item.name}</h2>
                                <p className="text-center text-sm text-ink-muted">{formatUsd(item.price)}</p>
                                <button
                                    type="button"
                                    className="mt-auto rounded-full bg-ink py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-accent"
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

export default AllProducts;
