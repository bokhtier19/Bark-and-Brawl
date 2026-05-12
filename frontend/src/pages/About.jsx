import { assets } from "../assets/assets";
import Review from "../components/Review";
import { usePageTitle } from "../hooks/usePageTitle";

const About = () => {
    usePageTitle("About");

    return (
        <section className="bg-paper px-4 py-12 text-ink md:px-8 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="fjalla-one-regular mb-6 text-3xl font-normal uppercase leading-snug tracking-wide md:text-4xl">Dog-tested gear for every showdown</h1>
                <p className="mb-10 text-lg leading-relaxed text-ink-muted">
                    We believe every dog deserves to unleash their inner fighter — with gear that is rugged, stylish, and built for the streets. From protective gloves to standout accessories, our
                    collection helps pups stay safe and show personality.
                </p>
                <div className="relative mt-6 overflow-hidden rounded-3xl shadow-lift">
                    <img src={assets.Hero_2} alt="Dog wearing Bark and Brawl street gear" className="h-auto w-full object-cover" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                </div>

                <Review />
            </div>
        </section>
    );
};

export default About;
