import Hero from "../components/Hero";
import Inspiration from "../components/Inspiration";
import BestSeller from "../components/BestSeller";
import Category from "../components/Category";
import Review from "../components/Review";
import FAQ from "../components/FAQs";
import FeaturedProduct from "../components/FeaturedProduct";
import { usePageTitle } from "../hooks/usePageTitle";

const Home = () => {
    usePageTitle(null);

    return (
        <div>
            <Hero />
            <Inspiration />
            <BestSeller />
            <Category />
            <Review />
            <FeaturedProduct />
            <FAQ />
        </div>
    );
};

export default Home;
