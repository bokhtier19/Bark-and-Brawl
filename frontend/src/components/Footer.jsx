import { Link } from "react-router-dom";

const Footer = () => {
    const link = "roboto-regular text-stone-400 transition hover:text-white";

    return (
        <footer className="flex justify-center bg-ink tracking-widest text-white">
            <div className="mt-16 mb-8 flex w-[92%] max-w-7xl flex-col text-xs">
                <div className="mb-16 flex flex-col gap-10 pl-0 sm:flex-row sm:justify-around sm:p-8">
                    <div>
                        <p className="mb-4 text-sm font-semibold tracking-widest">Navigation</p>
                        <ul className="flex flex-col gap-2 leading-6">
                            <Link to="/" className={link}>
                                Home
                            </Link>
                            <Link to="/about" className={link}>
                                About
                            </Link>
                            <Link to="/contact" className={link}>
                                Contact
                            </Link>
                            <Link to="/shop" className={link}>
                                Shop
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-4 text-sm font-semibold tracking-widest">Collections</p>
                        <ul className="flex flex-col gap-2 leading-6">
                            <Link to="/barkpack" className={link}>
                                Barkpack
                            </Link>
                            <Link to="/shop" className={link}>
                                Tactical gear
                            </Link>
                            <Link to="/shop" className={link}>
                                Gloves & guards
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-4 text-sm font-semibold tracking-widest">Support</p>
                        <ul className="flex flex-col gap-2 leading-6">
                            <Link to="/contact" className={link}>
                                FAQs & contact
                            </Link>
                            <Link to="/contact" className={link}>
                                Shipping & returns
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="h-px w-4/5 bg-stone-600" />
                </div>

                <div className="flex flex-col items-center justify-around gap-4 py-6 text-stone-500 sm:flex-row">
                    <p>© {new Date().getFullYear()} Bark & Brawl</p>
                    <span className="hidden sm:inline">·</span>
                    <p>Privacy</p>
                    <span className="hidden sm:inline">·</span>
                    <p>Terms</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
