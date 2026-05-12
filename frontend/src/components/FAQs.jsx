import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimationContext.jsx";
import { faqData } from "../data/faqData.js";

export default function FAQ() {
    const { containerVariants, childVariants } = useContext(AnimationContext);
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <section className="mt-8 mb-12 bg-cream/60 py-14 uppercase">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <h2 className="fjalla-one-regular mb-2 text-2xl font-normal tracking-[0.15em] text-ink md:text-3xl">Frequent questions</h2>
                <p className="mb-12 text-sm normal-case tracking-normal text-ink-muted">Everything you (and your dog) need to know.</p>
                <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 md:gap-8">
                    {faqData.map((item, index) => (
                        <motion.div variants={childVariants} key={item.question} className="rounded-2xl border border-stone-100 bg-white p-1 shadow-card">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left normal-case"
                                aria-expanded={openQuestion === index}
                                onClick={() => toggleQuestion(index)}
                            >
                                <span className="text-sm font-semibold tracking-wide text-ink">{item.question}</span>
                                <span className="text-xl text-accent transition-transform duration-300" aria-hidden>
                                    {openQuestion === index ? "−" : "+"}
                                </span>
                            </button>
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openQuestion === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                <div className="overflow-hidden">
                                    <p className="px-4 pb-4 text-sm normal-case leading-relaxed tracking-normal text-ink-muted">{item.answer}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
