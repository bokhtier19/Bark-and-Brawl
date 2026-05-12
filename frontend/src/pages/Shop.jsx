import AllProducts from "../components/AllProducts.jsx";
import { usePageTitle } from "../hooks/usePageTitle";

const Shop = () => {
    usePageTitle("Shop");

    return (
        <div>
            <AllProducts />
        </div>
    );
};

export default Shop;
