import { useContext, useState } from "react";
import { motion } from "framer-motion";
import FAQ from "../components/FAQs";
import { assets } from "../assets/assets";
import { AnimationContext } from "../context/AnimationContext.jsx";
import { usePageTitle } from "../hooks/usePageTitle";

const Contact = () => {
    usePageTitle("Contact");
    const { containerVariants, childVariants } = useContext(AnimationContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedMessage = message.trim();
        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            setStatus({ type: "error", text: "Please fill in your name, email, and message." });
            return;
        }
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
        if (!emailOk) {
            setStatus({ type: "error", text: "Please enter a valid email address." });
            return;
        }
        setStatus({ type: "success", text: "Thanks — your woof is in our inbox. We will fetch a reply soon." });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section className="bg-paper px-4 py-12 uppercase text-ink md:px-10 md:py-20">
            <div className="mx-auto max-w-7xl text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="fjalla-one-regular mb-6 text-4xl font-normal md:text-5xl"
                >
                    Get in touch, top dog
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="fjalla-one-regular mx-auto mb-12 max-w-3xl text-lg normal-case leading-relaxed tracking-normal text-ink-muted"
                >
                    Questions, praise, or just a friendly bark — we are all ears (and paws). A human pack member will get back to you shortly.
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true }}
                    className="mb-14 flex flex-col gap-10 rounded-3xl border border-stone-100 bg-white p-8 shadow-card md:flex-row md:items-center md:justify-between md:text-left"
                >
                    <motion.div variants={childVariants} className="mx-auto w-full max-w-md shrink-0 md:w-1/2">
                        <img src={assets.contact_page} alt="" className="rounded-2xl object-cover shadow-card" width={560} height={420} />
                    </motion.div>

                    <motion.div variants={childVariants} className="flex flex-col gap-8 normal-case tracking-normal md:pl-6">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">Headquarters</p>
                            <p className="mt-1 text-stone-700">123 Ruff St., Barksville, Dogland</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">Phone</p>
                            <p className="mt-1 text-stone-700">(555) WOOF-123</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">Email</p>
                            <p className="mt-1 text-stone-700">bark@streetfighterdogs.com</p>
                        </div>
                    </motion.div>
                </motion.div>

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto mb-14 max-w-3xl space-y-5 rounded-3xl border border-stone-100 bg-white p-8 text-left shadow-card md:p-10"
                    noValidate
                >
                    <div>
                        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted" htmlFor="contact-name">
                            Your name (or your pup&apos;s)
                        </label>
                        <input
                            id="contact-name"
                            type="text"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-stone-200 bg-paper px-4 py-3 text-sm normal-case tracking-normal text-ink placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                            placeholder="Name or paw print"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted" htmlFor="contact-email">
                            Email
                        </label>
                        <input
                            id="contact-email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-stone-200 bg-paper px-4 py-3 text-sm normal-case tracking-normal text-ink placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                            placeholder="human@example.com"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted" htmlFor="contact-message">
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full resize-y rounded-xl border border-stone-200 bg-paper px-4 py-3 text-sm normal-case tracking-normal text-ink placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                            placeholder="What is on your mind?"
                        />
                    </div>
                    {status ? (
                        <p role="alert" className={`text-sm normal-case ${status.type === "error" ? "text-red-600" : "text-emerald-700"}`}>
                            {status.text}
                        </p>
                    ) : null}
                    <button
                        type="submit"
                        className="w-full rounded-full bg-ink py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-accent md:w-auto md:px-12"
                    >
                        Send a woof
                    </button>
                </form>

                <FAQ />

                <p className="mt-12 text-sm normal-case tracking-normal text-ink-muted">We may reply with treats, not just answers.</p>
            </div>
        </section>
    );
};

export default Contact;
