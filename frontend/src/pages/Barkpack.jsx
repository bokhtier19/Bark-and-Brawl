import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../hooks/useCart.js";
import { formatUsd } from "../utils/format.js";
import { usePageTitle } from "../hooks/usePageTitle";

const Barkpack = () => {
    usePageTitle("Barkpack");
    const { items, subtotal, totalQty, setQty, removeItem, clearCart } = useCart();

    return (
        <section className="min-h-[60vh] bg-paper px-4 py-14 md:px-8">
            <div className="mx-auto max-w-4xl">
                <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">Your pack</p>
                    <h1 className="fjalla-one-regular text-3xl font-normal uppercase tracking-[0.12em] text-ink md:text-4xl">Barkpack</h1>
                    <p className="mt-3 text-sm text-ink-muted">{totalQty === 0 ? "Nothing here yet — stock up from the shop." : `${totalQty} item${totalQty === 1 ? "" : "s"} ready to roll.`}</p>
                </motion.header>

                {items.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-stone-300 bg-white py-20 text-center shadow-card">
                        <p className="mb-6 text-ink-muted">Your barkpack is empty.</p>
                        <Link
                            to="/shop"
                            className="inline-flex rounded-full bg-ink px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-accent"
                        >
                            Browse the shop
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <ul className="divide-y divide-stone-100 rounded-3xl border border-stone-100 bg-white shadow-card">
                            {items.map((item) => (
                                <li key={item.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                                    <img src={item.image} alt="" className="h-24 w-24 shrink-0 rounded-2xl object-cover" />
                                    <div className="min-w-0 flex-1">
                                        <p className="font-semibold uppercase tracking-wide text-ink">{item.name}</p>
                                        <p className="mt-1 text-sm text-ink-muted">{formatUsd(item.price)} each</p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                                        <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-ink-muted">
                                            Qty
                                            <input
                                                type="number"
                                                min={1}
                                                max={99}
                                                value={item.qty}
                                                onChange={(e) => setQty(item.id, Number.parseInt(e.target.value, 10) || 1)}
                                                className="w-16 rounded-lg border border-stone-200 px-2 py-1 text-center text-sm text-ink"
                                            />
                                        </label>
                                        <button type="button" className="text-xs font-semibold uppercase tracking-wider text-red-600 hover:underline" onClick={() => removeItem(item.id)}>
                                            Remove
                                        </button>
                                        <p className="min-w-[5rem] text-right font-semibold text-ink">{formatUsd(item.price * item.qty)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col items-end gap-4 rounded-3xl border border-stone-100 bg-white p-6 shadow-card">
                            <p className="text-lg">
                                <span className="text-ink-muted">Subtotal </span>
                                <span className="font-semibold text-ink">{formatUsd(subtotal)}</span>
                            </p>
                            <p className="max-w-md text-right text-xs text-ink-muted">Checkout coming soon — this demo saves your pack in the browser.</p>
                            <div className="flex flex-wrap justify-end gap-3">
                                <button type="button" className="rounded-full border border-stone-200 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted hover:bg-stone-50" onClick={clearCart}>
                                    Clear barkpack
                                </button>
                                <Link
                                    to="/shop"
                                    className="rounded-full bg-ink px-8 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent"
                                >
                                    Keep shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Barkpack;
